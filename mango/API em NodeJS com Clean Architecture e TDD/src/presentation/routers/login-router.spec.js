import { MissingParamError } from '../helpers/missing-param-error'
import { createLoginRouter } from './login-router'

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
