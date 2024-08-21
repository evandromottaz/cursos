const httpResponse = require('../helpers/http-response')

module.exports = class LoginRouter {
    constructor(authUseCase) {
        this.authUseCase = authUseCase
    }
    route(httpRequest) {
        if (!httpRequest || !httpRequest.body) return httpResponse.serverError()

        if (!httpRequest.body.email) return httpResponse.badRequest('email')

        if (!httpRequest.body.password) return httpResponse.badRequest('password')

        this.authUseCase.auth(httpRequest.body.email)

        return httpResponse.badRequest()
    }
}
