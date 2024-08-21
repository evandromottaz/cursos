import { MissingParamError } from './missing-param-error'

export const httpResponse = {
    badRequest: (errorMessage) => ({
        statusCode: 400,
        body: new MissingParamError(errorMessage),
    }),
    serverError: () => ({
        statusCode: 500,
    }),
}
