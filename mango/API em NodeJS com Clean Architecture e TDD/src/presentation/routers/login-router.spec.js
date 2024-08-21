function createLoginRouter() {
    const route = () => ({
        statusCode: 400,
    })

    return { route }
}
describe('first', () => {
    test('should return 400 if no email is proved', () => {
        const sut = createLoginRouter()
        const httpRequest = {
            body: {
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
    test('should return 400 if no password is proved', () => {
        const sut = createLoginRouter()
        const httpRequest = {
            body: {
                email: 'any_email@gmail.com',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})
