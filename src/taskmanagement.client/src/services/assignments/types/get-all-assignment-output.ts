import { AssignmentPriority } from './assignment-priority'

export interface GetAllAssignmentOutput {
    assignedUserName: string
    deadline: string
    description?: string
    id: string
    name: string
    priority: AssignmentPriority
}
