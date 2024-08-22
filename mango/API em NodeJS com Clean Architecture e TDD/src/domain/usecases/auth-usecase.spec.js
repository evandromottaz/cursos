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
        if (!email || !password || !this.loadUserEmailRepository || !this.loadUserEmailRepository.load) {
            throw new ServerError()
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
    test('Should throw if no LoadUserEmailRepository is provided', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth('any_email@gmail.com', 'any_password')
        await expect(promise).rejects.toThrow(new ServerError())
    })
    test('Should throw if LoadUserEmailRepository has no load method', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth('any_email@gmail.com', 'any_password')
        await expect(promise).rejects.toThrow(new ServerError())
    })
})
