export interface GetAllAssignmentOutput {
    assignedUserName: string
    deadline: string
    description?: string
    id: string
    name: string
    priority: 'Low' | 'Medium' | 'High'
}
