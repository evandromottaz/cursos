const validator = {
    isEmailValid: true,
    isEmail(email) {
        this.email = email
        return this.isEmailValid
    },
}

class EmailValidator {
    isValid(email) {
        return validator.isEmail(email)
    }
}

describe('Email Validator', () => {
    test('Should return true if validator returns true', () => {
        const sut = new EmailValidator()
        expect(sut.isValid('valid_email@gmail.com')).toBe(true)
    })

    test('Should return false if validator returns false', () => {
        validator.isEmailValid = false
        const sut = new EmailValidator()
        expect(sut.isValid('invalid_email@gmail.com')).toBe(false)
    })
    test('Should call validator with correct email', () => {
        const sut = new EmailValidator()
        sut.isValid('any_email@gmail.com')
        expect(validator.email).toBe('any_email@gmail.com')
    })
})
