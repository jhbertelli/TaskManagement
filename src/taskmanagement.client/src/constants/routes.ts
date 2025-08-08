import { createBrowserRouter, redirect } from 'react-router-dom'
import { ErrorElement } from '../components/ErrorBoundary'
import { assignmentRoutes } from './assignments-routes'
import { authRoutes } from './auth-routes'
import { paths } from './paths'

export const routes = createBrowserRouter([
    {
        ErrorBoundary: ErrorElement,
        children: [
            {
                index: true,
                loader: async () => redirect(paths.assignments),
            },
            ...authRoutes,
            ...assignmentRoutes,
        ],
    },
])
