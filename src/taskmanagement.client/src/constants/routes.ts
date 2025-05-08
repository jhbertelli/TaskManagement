import { createBrowserRouter, redirect } from 'react-router-dom'
import { authRoutes } from './auth-routes'
import { paths } from './paths'

export const routes = createBrowserRouter([
    {
        index: true,
        loader: async () => redirect(paths.login),
    },
    ...authRoutes,
])
