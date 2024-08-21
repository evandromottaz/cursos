const { MissingParamError } = require('./missing-param-error')

module.exports = {
    badRequest: (errorMessage) => ({
        statusCode: 400,
        body: new MissingParamError(errorMessage),
    }),
    serverError: () => ({
        statusCode: 500,
    }),
    unauthorized: () => ({
        statusCode: 401,
    }),
}
