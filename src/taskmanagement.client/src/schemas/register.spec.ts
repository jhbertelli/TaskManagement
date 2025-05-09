import { RegisterSchema, registerSchema } from './register'

describe('registerSchema', () => {
    const mockData: RegisterSchema = {
        email: 'robert@fake.com',
        name: 'Robert Jones',
        password: 'abc123@-3',
        repeatPassword: 'abc123@-3',
    }

    describe('email', () => {
        it.each([undefined, ''])('should be invalid when is %p', (email) => {
            const result = registerSchema.safeParse({ ...mockData, email })

            expect(result.success).toBe(false)
        })

        it('should be invalid when is invalid email', () => {
            const result = registerSchema.safeParse({ ...mockData, email: 'test@aa' })

            expect(result.success).toBe(false)
        })
    })

    describe('name', () => {
        it.todo('should be invalid when is %p')
    })

    describe('password', () => {
        it.each([undefined, ''])('should be invalid when is %p', (password) => {
            const result = registerSchema.safeParse({ ...mockData, password })

            expect(result.success).toBe(false)
        })

        it.todo('should be invalid when all rules are satisfied except lowercase letter rule')

        it.todo('should be invalid when all rules are satisfied except number rule')

        it.todo('should be invalid when all rules are satisfied except special character rule')

        it.todo('should be invalid when all rules are satisfied except minimal length rule')
    })

    describe('repeat password', () => {
        it.todo('should be invalid when is %p')

        it.todo('should be invalid when is different than password')
    })

    it('should be valid when email, name and password are correct', () => {
        const result = registerSchema.safeParse(mockData)

        expect(result.success).toBe(true)
    })
})
