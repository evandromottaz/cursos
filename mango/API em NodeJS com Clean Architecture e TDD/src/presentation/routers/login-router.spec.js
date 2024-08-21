function createLoginRouter() {
    const route = () => ({
        statusCode: 400,
    })

    return { route }
}
describe('first', () => {
    test('should return 400 if not email is proved', () => {
        const sut = createLoginRouter()
        const httpRequest = {
            body: {
                password: 'any_password',
            },
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})
