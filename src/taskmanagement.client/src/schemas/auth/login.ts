import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Insira um e-mail válido'),
    password: z.string().nonempty('Insira uma senha'),
})

export type LoginSchema = z.infer<typeof loginSchema>
