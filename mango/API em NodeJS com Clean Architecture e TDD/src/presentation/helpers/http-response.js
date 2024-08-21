const { MissingParamError } = require('./missing-param-error')

const httpResponse = {
    badRequest: (errorMessage) => ({
        statusCode: 400,
        body: new MissingParamError(errorMessage),
    }),
    serverError: () => ({
        statusCode: 500,
    }),
}

module.exports = { httpResponse }
