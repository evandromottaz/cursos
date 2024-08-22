/* eslint-disable no-unused-vars */
import httpResponse from '../helpers/http-response.js'

import InvalidParamError from '../helpers/invalid-param-error.js'
import MissingParamError from '../../utils/errors/missing-param-error.js'

export default class LoginRouter {
    constructor({ authUseCase, emailValidator } = {}) {
        this.authUseCase = authUseCase
        this.emailValidator = emailValidator
    }
    async route(httpRequest) {
        try {
            const { email, password } = httpRequest.body
            if (!email) {
                return httpResponse.badRequest(new MissingParamError('email'))
            }
            if (!this.emailValidator.isValid(email)) {
                return httpResponse.badRequest(new InvalidParamError('email'))
            }
            if (!password) {
                return httpResponse.badRequest(new MissingParamError('password'))
            }
            const accessToken = await this.authUseCase.auth(email, password)
            if (!accessToken) {
                return httpResponse.unauthorized()
            }
            return httpResponse.ok(accessToken)
        } catch (e) {
            return httpResponse.serverError()
        }
    }
}
