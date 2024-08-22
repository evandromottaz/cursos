import UnauthorizedError from './unauthorized-error.js'
import ServerError from './server-error.js'

export default {
    badRequest: (error) => ({
        statusCode: 400,
        body: error,
    }),
    serverError: () => ({
        statusCode: 500,
        body: new ServerError(),
    }),
    unauthorized: () => ({
        statusCode: 401,
        body: new UnauthorizedError(),
    }),
    ok: (accessToken) => ({
        statusCode: 200,
        body: { accessToken },
    }),
}
