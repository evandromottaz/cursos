const httpResponse = require('../helpers/http-response')

module.exports = class LoginRouter {
    constructor(authUseCase) {
        this.authUseCase = authUseCase
    }
    async route(httpRequest) {
        try {
            const { email, password } = httpRequest.body
            if (!email) {
                return httpResponse.badRequest('email')
            }
            if (!password) {
                return httpResponse.badRequest('password')
            }
            const accessToken = await this.authUseCase.auth(email, password)
            if (!accessToken) {
                return httpResponse.unauthorized()
            }
            return httpResponse.ok(accessToken)
        } catch (error) {
            return httpResponse.serverError()
        }
    }
}
