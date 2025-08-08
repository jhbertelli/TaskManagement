import { AxiosError } from 'axios'
import { Navigate, useRouteError } from 'react-router-dom'
import { pathTo } from '../../constants/paths'

export const ErrorElement = () => {
    const error = useRouteError() as Error

    if (error instanceof AxiosError) {
        switch (error.status) {
            case 401:
                return <Navigate replace={true} to={pathTo.login} />

            default:
                break
        }
    }

    console.error(error)

    return <>Algo deu errado!</>
}
