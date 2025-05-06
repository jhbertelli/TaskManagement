import { RegisterPageSchema, registerPageSchema } from './RegisterPage'

describe('registerPageSchema', () => {
    const mockData: RegisterPageSchema = {
        email: 'robert@fake.com',
        password: '123123',
    }

    describe('email', () => {
        it.each([undefined, ''])('should be invalid when is %p', (email) => {
            const result = registerPageSchema.safeParse({ ...mockData, email })

            expect(result.success).toBe(false)
        })

        it('should be invalid when is invalid email', () => {
            const result = registerPageSchema.safeParse({ ...mockData, email: 'test@aa' })

            expect(result.success).toBe(false)
        })
    })

    describe('password', () => {
        it.each([undefined, ''])('should be invalid when is %p', (password) => {
            const result = registerPageSchema.safeParse({ ...mockData, password })

            expect(result.success).toBe(false)
        })
    })

    it('should be valid when email and password are correct', () => {
        const result = registerPageSchema.safeParse(mockData)

        expect(result.success).toBe(true)
    })
})
