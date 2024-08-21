import { httpResponse } from '../helpers/http-response'

export function createLoginRouter() {
    const route = (httpRequest) => {
        if (!httpRequest) return httpResponse.serverError()

        if (!httpRequest.body) return httpResponse.serverError()

        if (!httpRequest.body.email) return httpResponse.badRequest('email')

        if (!httpRequest.body.password) return httpResponse.badRequest('password')

        return httpResponse.badRequest()
    }

    return { route }
}
