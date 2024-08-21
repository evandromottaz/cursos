const httpResponse = {
    badRequest: (errorMessage) => ({
        statusCode: 400,
        body: new MissingParamError(errorMessage),
    }),
    serverError: () => ({
        statusCode: 500,
    }),
}

class MissingParamError extends Error {
    constructor(name) {
        super(`Missing param: ${name}`)
        this.name = 'MissingParamError'
    }
}

function createLoginRouter() {
    const route = (httpRequest) => {
        if (!httpRequest) return httpResponse.serverError()

        if (!httpRequest.body) return httpResponse.serverError()

        if (!httpRequest.body.email) return httpResponse.badRequest('email')

        if (!httpRequest.body.password) return httpResponse.badRequest('password')

        return httpResponse.badRequest()
    }

    return { route }
}

describe('first', () => {
    test('Should return 500 if no httpRequest is proved', () => {
        const sut = createLoginRouter()
        const httpResponse = sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })
    test('Should return 500 if httpRequest is invalid', () => {
        const sut = createLoginRouter()
        const httpResponse = sut.route({})
        expect(httpResponse.statusCode).toBe(500)
    })
    test('Should return 400 if no email is proved', () => {
        const sut = createLoginRouter()
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
        const sut = createLoginRouter()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('password'))
    })
})
