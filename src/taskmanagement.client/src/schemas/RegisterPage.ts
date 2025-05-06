import { z } from 'zod'

export const registerPageSchema = z.object({
    email: z.string().email(),
    password: z.string().nonempty(),
})

export type RegisterPageSchema = z.infer<typeof registerPageSchema>
