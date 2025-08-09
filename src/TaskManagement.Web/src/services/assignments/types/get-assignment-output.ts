import { AssignmentPriority } from './assignment-priority'
import { AssignmentSection } from './assignment-section'

export interface GetAssignmentOutput {
    assignedUserEmail: string
    assignedUserName: string
    deadline: string
    description?: string
    id: string
    name: string
    priority: AssignmentPriority
    section: AssignmentSection
}
