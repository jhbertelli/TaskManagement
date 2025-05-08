import { z } from 'zod'

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@\-#.$%^&*])[a-z0-9!@\-#.$%^&*]{8,}$/

export const registerPageSchema = z
    .object({
        name: z.string().nonempty(),
        email: z.string().email(),
        password: z.string().nonempty().regex(PASSWORD_REGEX),
        repeatPassword: z.string().nonempty(),
    })
    .refine((schema) => schema.password === schema.repeatPassword, {
        message: 'As senhas devem ser iguais',
        path: ['repeatPassword'],
    })

export type RegisterPageSchema = z.infer<typeof registerPageSchema>
