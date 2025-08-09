import { AssignmentAlertType } from './assignment-alert-type'
import { AssignmentPriority } from './assignment-priority'
import { AssignmentSection } from './assignment-section'

export interface CreateAssignmentInput {
    assignedUserId: string
    deadline: string
    name: string
    priority: AssignmentPriority
    section: AssignmentSection
    alertType?: AssignmentAlertType
    description?: string
}
