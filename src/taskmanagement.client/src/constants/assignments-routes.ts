import { RouteObject } from 'react-router-dom'
import { paths } from './paths'
import { AssignmentsPage } from 'pages/AssignmentsPage'
import { CreateAssignmentPage } from 'pages/CreateAssignmentPage'

export const assignmentRoutes: RouteObject[] = [
    { path: paths.assignments, Component: AssignmentsPage },
    { path: paths.createAssignment, Component: CreateAssignmentPage },
]
