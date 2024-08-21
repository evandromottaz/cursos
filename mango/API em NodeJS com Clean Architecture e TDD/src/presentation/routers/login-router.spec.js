const { MissingParamError } = require('../helpers/missing-param-error')
const LoginRouter = require('./login-router')

const makeSut = () => {
    class AuthUseCase {
        auth(email, password) {
            this.email = email
            this.password = password
        }
    }
    const authUseCase = new AuthUseCase()
    const sut = new LoginRouter(authUseCase)
    return { sut, authUseCase }
}

describe('first', () => {
    test('Should return 500 if no httpRequest is proved', () => {
        const { sut } = makeSut()
        const httpResponse = sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })
    test('Should return 500 if httpRequest is invalid', () => {
        const { sut } = makeSut()
        const httpResponse = sut.route({})
        expect(httpResponse.statusCode).toBe(500)
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
        const { sut, authUseCase } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        sut.route(httpRequest)
        expect(authUseCase.email).toBe(httpRequest.body.email)
        expect(authUseCase.password).toBe(httpRequest.body.password)
    })
})
