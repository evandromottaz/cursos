import MissingParamError from '../../utils/errors/missing-param-error'

class AuthUseCase {
    async auth(email, password) {
        if (!email) {
            throw new MissingParamError('email')
        }
        if (!password) {
            throw new MissingParamError('password')
        }
        this.email = email
        this.password = password
        return this.accessToken
    }
}
describe('AuthUseCase', () => {
    test('Should receive email and password', async () => {
        const sut = new AuthUseCase()
        await sut.auth('any_email', 'any_password')
        expect(sut.email).toBe('any_email')
        expect(sut.password).toBe('any_password')
    })
    test('Should throw if no email is provided', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth()
        expect(promise).rejects.toThrow(new MissingParamError('email'))
    })
    test('Should throw if no password is provided', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth('any_email')
        expect(promise).rejects.toThrow(new MissingParamError('password'))
    })
})
