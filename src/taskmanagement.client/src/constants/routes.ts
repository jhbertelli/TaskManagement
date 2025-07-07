import { createBrowserRouter, redirect } from 'react-router-dom'
import { authRoutes } from './auth-routes'
import { assignmentRoutes } from './assignments-routes'
import { paths } from './paths'

export const routes = createBrowserRouter([
    {
        index: true,
        loader: async () => redirect(paths.assignments),
    },
    ...authRoutes,
    ...assignmentRoutes,
])
