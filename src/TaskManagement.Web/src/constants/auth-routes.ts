import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { RouteObject } from 'react-router-dom'
import { paths } from './paths'

export const authRoutes: RouteObject[] = [
    { path: paths.login, Component: LoginPage },
    { path: paths.register, Component: RegisterPage },
]
