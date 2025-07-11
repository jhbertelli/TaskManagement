import { AssignmentPriority } from './assignment-priority'

export interface GetAllAssignmentsOutput {
    assignedUserName: string
    deadline: string
    description?: string
    id: string
    name: string
    priority: AssignmentPriority
}
