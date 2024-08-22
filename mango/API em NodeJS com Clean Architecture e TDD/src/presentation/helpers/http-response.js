const MissingParamError = require('./missing-param-error')
const UnauthorizedError = require('./unauthorized-error')
const ServerError = require('./server-error')

module.exports = {
    badRequest: (errorMessage) => ({
        statusCode: 400,
        body: new MissingParamError(errorMessage),
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
