import { useMutation } from '@tanstack/react-query'
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage'
import { pathTo } from 'constants/paths'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { AuthService } from 'services/auth-service'
import { configureAuthorizationHeader } from 'services/axios'

export const useLogin = () => {
    const navigate = useNavigate()
    const [, setLocalStorage] = useLocalStorage(LOCAL_STORAGE_KEYS.JWT_TOKEN, '', { raw: true })

    return useMutation({
        mutationFn: AuthService.login,
        onSuccess: ({ data: { jwtToken } }) => {
            setLocalStorage(jwtToken)
            configureAuthorizationHeader()
            navigate(pathTo.assignments)
        },
    })
}
