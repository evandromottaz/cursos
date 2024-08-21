export class MissingParamError extends Error {
    constructor(name) {
        super(`Missing param: ${name}`)
        this.name = 'MissingParamError'
    }
}
