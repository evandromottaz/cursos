const makeLoadUserEmailRepository = () => {
    class LoadUserEmailRepository {
        async load(email, password) {
            this.email = email
            this.password = password
            return this.user
        }
    }
    const loadUserEmailRepositorySpy = new LoadUserEmailRepository()
    loadUserEmailRepositorySpy.user = { password: 'hashed_password', id: 'any_id' }
    return loadUserEmailRepositorySpy
}

const makeEncrypter = () => {
    class EncrypterSpy {
        async compare(value, hashedValue) {
            this.value = value
            this.hashedValue = hashedValue
            return this.isValid
        }
    }
    const encrypterSpy = new EncrypterSpy()
    encrypterSpy.isValid = true
    return encrypterSpy
}

const makeTokenGenerator = () => {
    class TokenGeneratorSpy {
        async generate(userId) {
            this.userId = userId
            return this.accessToken
        }
    }
    const tokenGeneratorSpy = new TokenGeneratorSpy()
    tokenGeneratorSpy.accessToken = 'any_token'
    return tokenGeneratorSpy
}

const makeSut = () => {
    const encrypterSpy = makeEncrypter()
    const loadUserEmailRepositorySpy = makeLoadUserEmailRepository()
    const tokenGeneratorSpy = makeTokenGenerator()
    const sut = new AuthUseCase(loadUserEmailRepositorySpy, encrypterSpy, tokenGeneratorSpy)
    return { sut, loadUserEmailRepositorySpy, encrypterSpy, tokenGeneratorSpy }
}
class AuthUseCase {
    constructor(loadUserEmailRepository, encrypter, tokenGenerator) {
        this.loadUserEmailRepository = loadUserEmailRepository
        this.encrypter = encrypter
        this.tokenGenerator = tokenGenerator
    }

    async auth(email, password) {
        if (!email || !password || !this.loadUserEmailRepository || !this.loadUserEmailRepository.load) {
            throw new Error()
        }
        const user = await this.loadUserEmailRepository.load(email, password)
        if (!user) {
            return null
        }
        const isValid = await this.encrypter.compare(password, user.password)
        if (!isValid) {
            return null
        }
        return await this.tokenGenerator.generate(user.id)
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
    test('Should return null when invalid email is provided', async () => {
        const { sut, encrypterSpy } = makeSut()
        encrypterSpy.isValid = false
        const accessToken = await sut.auth('valid_email@gmail.com', 'any_password')
        expect(accessToken).toBeNull()
    })
    test('Should call TokenGenerator with correct userId', async () => {
        const { sut, tokenGeneratorSpy, loadUserEmailRepositorySpy } = makeSut()
        await sut.auth('valid_email@gmail.com', 'valid_password')
        expect(tokenGeneratorSpy.userId).toBe(loadUserEmailRepositorySpy.user.id)
    })
    test('Should return accessToken when correct credentials are provided', async () => {
        const { sut, tokenGeneratorSpy } = makeSut()
        const accessToken = await sut.auth('valid_email@gmail.com', 'valid_password')
        expect(accessToken).toBe(tokenGeneratorSpy.accessToken)
        expect(accessToken).toBeTruthy()
    })
})
