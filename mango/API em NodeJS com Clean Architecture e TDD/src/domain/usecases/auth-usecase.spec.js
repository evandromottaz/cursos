import ServerError from '../../errors/server-error'

const makeLoadUserEmailRepository = () => {
    class LoadUserEmailRepository {
        async load(email, password) {
            this.email = email
            this.password = password
        }
    }
    return new LoadUserEmailRepository()
}

const makeSut = () => {
    const loadUserEmailRepositorySpy = makeLoadUserEmailRepository()
    const sut = new AuthUseCase(loadUserEmailRepositorySpy)
    return { sut, loadUserEmailRepositorySpy }
}
class AuthUseCase {
    constructor(loadUserEmailRepository) {
        this.loadUserEmailRepository = loadUserEmailRepository
        console.log({ loadUserEmailRepository })
    }

    async auth(email, password) {
        if (!email || !password) {
            throw new ServerError('email')
        }
        await this.loadUserEmailRepository.load(email, password)
    }
}
describe('AuthUseCase', () => {
    test('Should throw if no email or password is provided', async () => {
        const { sut } = makeSut()
        const promise = sut.auth()
        await expect(promise).rejects.toThrow(new ServerError())
    })
    test('Should call LoadUserEmailRepository with correct email', async () => {
        const { sut, loadUserEmailRepositorySpy } = makeSut()
        await sut.auth('any_email@gmail.com', 'any_password')
        expect(loadUserEmailRepositorySpy.email).toBe('any_email@gmail.com')
    })
})
