import { AssignmentsPage } from 'pages/AssignmentsPage'
import { CompleteAssignmentPage } from 'pages/CompleteAssignmentPage'
import { CreateAssignmentPage } from 'pages/CreateAssignmentPage'
import { ViewAssignmentPage } from 'pages/ViewAssignmentPage'
import { RouteObject } from 'react-router-dom'
import { paths } from './paths'

export const assignmentRoutes: RouteObject[] = [
    { path: paths.assignments, Component: AssignmentsPage },
    { path: paths.createAssignment, Component: CreateAssignmentPage },
    { path: paths.assignment, Component: ViewAssignmentPage },
    { path: paths.completeAssignment, Component: CompleteAssignmentPage },
]
