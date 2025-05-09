import { LoginSchema, loginSchema } from './login'

describe('loginSchema', () => {
    const mockData: LoginSchema = {
        email: 'robert@fake.com',
        password: '123123',
    }

    describe('email', () => {
        it.each([undefined, ''])('should be invalid when is %p', (email) => {
            const result = loginSchema.safeParse({ ...mockData, email })

            expect(result.success).toBe(false)
        })

        it('should be invalid when is invalid email', () => {
            const result = loginSchema.safeParse({ ...mockData, email: 'test@aa' })

            expect(result.success).toBe(false)
        })
    })

    describe('password', () => {
        it.each([undefined, ''])('should be invalid when is %p', (password) => {
            const result = loginSchema.safeParse({ ...mockData, password })

            expect(result.success).toBe(false)
        })
    })

    it('should be valid when email and password are correct', () => {
        const result = loginSchema.safeParse(mockData)

        expect(result.success).toBe(true)
    })
})
