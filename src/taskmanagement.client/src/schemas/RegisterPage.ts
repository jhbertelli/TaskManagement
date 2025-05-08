import { z } from 'zod'

export const registerPageSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    password: z.string().nonempty(),
    repeatPassword: z.string().nonempty(),
})

export type RegisterPageSchema = z.infer<typeof registerPageSchema>
