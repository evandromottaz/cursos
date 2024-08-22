const InvalidParamError = require('../helpers/invalid-param-error')
const MissingParamError = require('../helpers/missing-param-error')
const ServerError = require('../helpers/server-error')
const UnauthorizedError = require('../helpers/unauthorized-error')
const LoginRouter = require('./login-router')

const makeAuthUseCaseWithError = () => {
    class AuthUseCaseSpy {
        auth() {
            throw new Error()
        }
    }
    return new AuthUseCaseSpy()
}

const makeAuthUseCase = () => {
    class AuthUseCaseSpy {
        auth(email, password) {
            this.email = email
            this.password = password
            return this.accessToken
        }
    }
    const authUseCaseSpy = new AuthUseCaseSpy()
    authUseCaseSpy.accessToken = 'valid_token'
    return authUseCaseSpy
}

const makeEmailValidator = () => {
    class EmailValidatorSpy {
        isValid(email) {
            this.email = email
            return this.isEmailValid
        }
    }

    const emailValidatorSpy = new EmailValidatorSpy()
    emailValidatorSpy.isEmailValid = true
    return emailValidatorSpy
}

const makeSut = () => {
    const authUseCaseSpy = makeAuthUseCase()
    const emailValidatorSpy = makeEmailValidator()
    const sut = new LoginRouter({
        authUseCase: authUseCaseSpy,
        emailValidator: emailValidatorSpy,
    })

    return { sut, authUseCaseSpy, emailValidatorSpy }
}

describe('first', () => {
    test('Should return 500 if no httpRequest is proved', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.route()
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 500 if httpRequest is invalid', async () => {
        const { sut } = makeSut()
        const httpResponse = await sut.route({})
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 400 if no email is proved', async () => {
        const { sut } = makeSut()
        const httpRequest = {
            body: {
                password: 'any_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
    test('Should return 400 if no password is proved', async () => {
        const { sut } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
            },
        }
        const httpResponse = await sut.route(httpRequest)
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
    test('Should returns 401 when invalid credentials are provided', async () => {
        const { sut, authUseCaseSpy } = makeSut()
        authUseCaseSpy.accessToken = null
        const httpRequest = {
            body: {
                email: 'invalid_email@gmail.com',
                password: 'invalid_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(401)
        expect(httpResponse.body).toEqual(new UnauthorizedError())
    })
    test('Should return 500 when AuthUseCase is not provided', async () => {
        const sut = new LoginRouter()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 500 when AuthUseCase has no auth method', async () => {
        const sut = new LoginRouter({})
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })
    test('Should return 200 valid credentials are provided', async () => {
        const { sut, authUseCaseSpy } = makeSut()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body.accessToken).toEqual(authUseCaseSpy.accessToken)
    })
    test('Should return 500 when AuthUseCase throws', async () => {
        const authUseCaseSpy = makeAuthUseCaseWithError()
        const sut = new LoginRouter({ authUseCaseSpy })
        const httpResponse = await sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })
    test('Should return 400 if invalid email is proved', async () => {
        const { sut, emailValidatorSpy } = makeSut()
        emailValidatorSpy.isEmailValid = false
        const httpRequest = {
            body: {
                email: 'invalid_email@gmail.com',
                password: 'any_password',
            },
        }
        const httpResponse = await sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new InvalidParamError('email'))
    })
    test('Should return 500 when EmailValidator is no provided', async () => {
        const authUseCaseSpy = makeAuthUseCase()
        const sut = new LoginRouter({ authUseCaseSpy })
        const httpResponse = await sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })
    test('Should return 500 when EmailValidator has no isValid method', async () => {
        const authUseCaseSpy = makeAuthUseCase()
        const sut = new LoginRouter({ authUseCase: authUseCaseSpy, emailValidator: {} })
        const httpResponse = await sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })
})
