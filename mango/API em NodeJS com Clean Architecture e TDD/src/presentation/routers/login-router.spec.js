const MissingParamError = require('../helpers/missing-param-error')
const ServerError = require('../helpers/server-error')
const UnauthorizedError = require('../helpers/unauthorized-error')
const LoginRouter = require('./login-router')

const makeSut = () => {
    class AuthUseCaseSpy {
        auth(email, password) {
            this.email = email
            this.password = password
            return this.accessToken
        }
    }
    const authUseCaseSpy = new AuthUseCaseSpy()
    authUseCaseSpy.accessToken = 'valid_token'
    const sut = new LoginRouter(authUseCaseSpy)
    return { sut, authUseCaseSpy }
}

describe('first', () => {
    test('Should return 500 if no httpRequest is proved', () => {
        const { sut } = makeSut()
        const httpResponse = sut.route()
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 500 if httpRequest is invalid', () => {
        const { sut } = makeSut()
        const httpResponse = sut.route({})
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 400 if no email is proved', () => {
        const { sut } = makeSut()
        const httpRequest = {
            body: {
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
    test('Should return 400 if no password is proved', () => {
        const { sut } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('password'))
    })
    test('Should call AuthUseCase with correct params', () => {
        const { sut, authUseCaseSpy } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        sut.route(httpRequest)
        expect(authUseCaseSpy.email).toBe(httpRequest.body.email)
        expect(authUseCaseSpy.password).toBe(httpRequest.body.password)
    })
    test('Should returns 401 when invalid credentials are provided', () => {
        const { sut, authUseCaseSpy } = makeSut()
        authUseCaseSpy.accessToken = null
        const httpRequest = {
            body: {
                email: 'invalid_email@gmail.com',
                password: 'invalid_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(401)
        expect(httpResponse.body).toEqual(new UnauthorizedError())
    })
    test('Should return 500 when AuthUseCase is not provided', () => {
        const sut = new LoginRouter()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 500 when AuthUseCase has no auth method', () => {
        const sut = new LoginRouter({})
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 200 valid credentials are provided', () => {
        const { sut, authUseCaseSpy } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body.accessToken).toEqual(authUseCaseSpy.accessToken)
    })
})
