const makeLoadUserEmailRepository = () => {
    class LoadUserEmailRepository {
        async load(email, password) {
            this.email = email
            this.password = password
            return this.user
        }
    }
    return new LoadUserEmailRepository()
}

const makeSut = () => {
    class EncrypterSpy {
        async compare(value, hashedValue) {
            this.value = value
            this.hashedValue = hashedValue
        }
    }
    const encrypterSpy = new EncrypterSpy()
    const loadUserEmailRepositorySpy = makeLoadUserEmailRepository()
    loadUserEmailRepositorySpy.user = { password: 'hashed_password' }
    const sut = new AuthUseCase(loadUserEmailRepositorySpy, encrypterSpy)
    return { sut, loadUserEmailRepositorySpy, encrypterSpy }
}
class AuthUseCase {
    constructor(loadUserEmailRepository, encrypter) {
        this.loadUserEmailRepository = loadUserEmailRepository
        this.encrypter = encrypter
    }

    async auth(email, password) {
        if (!email || !password || !this.loadUserEmailRepository || !this.loadUserEmailRepository.load) {
            throw new Error()
        }
        const user = await this.loadUserEmailRepository.load(email, password)
        if (!user) {
            return null
        }
        await this.encrypter.compare(password, user.password)
    }
}
describe('AuthUseCase', () => {
    test('Should throw if no email or password is provided', async () => {
        const { sut } = makeSut()
        const promise = sut.auth()
        await expect(promise).rejects.toThrow()
    })
    test('Should call LoadUserEmailRepository with correct email', async () => {
        const { sut, loadUserEmailRepositorySpy } = makeSut()
        await sut.auth('any_email@gmail.com', 'any_password')
        expect(loadUserEmailRepositorySpy.email).toBe('any_email@gmail.com')
    })
    test('Should throw if no LoadUserEmailRepository is provided', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth('any_email@gmail.com', 'any_password')
        await expect(promise).rejects.toThrow()
    })
    test('Should throw if LoadUserEmailRepository has no load method', async () => {
        const sut = new AuthUseCase()
        const promise = sut.auth('any_email@gmail.com', 'any_password')
        await expect(promise).rejects.toThrow()
    })
    test('Should return null when LoadUserEmailRepository return null', async () => {
        const { sut, loadUserEmailRepositorySpy } = makeSut()
        loadUserEmailRepositorySpy.user = null
        const accessToken = await sut.auth('invalid_email@gmail.com', 'any_password')
        expect(accessToken).toBeNull()
    })
    test('Should call Encrypter with correct values', async () => {
        const { sut, loadUserEmailRepositorySpy, encrypterSpy } = makeSut()
        await sut.auth('valid_email@gmail.com', 'any_password')
        expect(encrypterSpy.value).toBe('any_password')
        expect(encrypterSpy.hashedValue).toBe(loadUserEmailRepositorySpy.user.password)
    })
})
