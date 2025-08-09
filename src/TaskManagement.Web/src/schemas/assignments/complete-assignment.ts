import { z } from 'zod'

export const completeAssignmentSchema = z.object({
    conclusionDate: z.string().nonempty(),
    conclusionNote: z.string().optional(),
})

export type CompleteAssignmentSchema = z.infer<typeof completeAssignmentSchema>
