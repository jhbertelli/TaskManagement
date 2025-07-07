import { z } from 'zod'

// Rules:
// - Should contain at least 1 lowercase letter
// - Should contain at least 1 number
// - Should contain at least 1 special character: !@-#.$%^&*
// - Should contain at least 8 characters
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@\-#.$%^&*])[a-zA-Z0-9!@\-#.$%^&*]{8,}$/

export const registerSchema = z
    .object({
        email: z.string().email('Insira um e-mail válido'),
        name: z.string().nonempty('Insira um nome'),
        password: z.string().nonempty().regex(PASSWORD_REGEX),
        repeatPassword: z.string().nonempty('Insira uma senha'),
    })
    .refine((schema) => schema.password === schema.repeatPassword, {
        message: 'As senhas devem ser iguais',
        path: ['repeatPassword'],
    })

export type RegisterSchema = z.infer<typeof registerSchema>
