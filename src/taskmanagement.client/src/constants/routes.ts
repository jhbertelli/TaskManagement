import { createBrowserRouter } from 'react-router-dom'
import { authRoutes } from './auth-routes'
import { assignmentRoutes } from './assignments-routes'

export const routes = createBrowserRouter([...authRoutes, ...assignmentRoutes])
