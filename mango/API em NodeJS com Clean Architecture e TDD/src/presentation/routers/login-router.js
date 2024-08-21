const { httpResponse } = require('../helpers/http-response')

function createLoginRouter() {
    const route = (httpRequest) => {
        if (!httpRequest || !httpRequest.body) return httpResponse.serverError()

        if (!httpRequest.body.email) return httpResponse.badRequest('email')

        if (!httpRequest.body.password) return httpResponse.badRequest('password')

        return httpResponse.badRequest()
    }

    return { route }
}

module.exports = { createLoginRouter }
