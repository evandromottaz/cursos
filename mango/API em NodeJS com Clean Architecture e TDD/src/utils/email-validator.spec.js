class EmailValidator {
    isValid(email) {
        return true
    }
}

describe('Email Validator', () => {
    test('Should return true if validator returns true', () => {
        const sut = new EmailValidator()
        expect(sut.isValid('4vz2n@example.com')).toBe(true)
    })
})
