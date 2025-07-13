import { z } from 'zod'

export const cancelAssignmentSchema = z.object({
    cancellationReason: z.string().nonempty(),
})

export type CancelAssignmentSchema = z.infer<typeof cancelAssignmentSchema>
