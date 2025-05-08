import { z } from 'zod'

export const loginPageSchema = z.object({
    email: z.string().email(),
    password: z.string().nonempty(),
})

export type LoginPageSchema = z.infer<typeof loginPageSchema>
