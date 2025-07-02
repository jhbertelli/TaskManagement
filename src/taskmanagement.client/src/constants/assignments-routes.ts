import { RouteObject } from 'react-router-dom'
import { paths } from './paths'
import { AssignmentsPage } from 'pages/AssignmentsPage'

export const assignmentRoutes: RouteObject[] = [
    {
        index: true,
        path: paths.assignments,
        Component: AssignmentsPage,
    },
]
