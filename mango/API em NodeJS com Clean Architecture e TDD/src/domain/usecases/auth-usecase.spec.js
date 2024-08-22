class AuthUseCase {
    async auth(email, password) {
        this.email = email
        this.password = password
        return this.accessToken
    }
}
describe('AuthUseCase', () => {
    test('Should receive email and password', async () => {
        const authUseCase = new AuthUseCase()
        await authUseCase.auth('any_email', 'any_password')
        expect(authUseCase.email).toBe('any_email')
        expect(authUseCase.password).toBe('any_password')
    })
})
