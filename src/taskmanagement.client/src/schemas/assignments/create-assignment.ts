import { z } from 'zod'

export const createAssignmentSchema = z.object({
    assignedUserId: z.string().nonempty(),
    deadline: z.string().nonempty(),
    name: z.string().nonempty(),
    priority: z.enum(['Low', 'Medium', 'High']),
    section: z.enum(['Domestic', 'Work', 'Leisure', 'Important']),
    alertType: z.enum(['SMS', 'Email']).optional(),
    description: z.string().optional(),
})

export type CreateAssignmentSchema = z.infer<typeof createAssignmentSchema>
