import { useMutation } from '@tanstack/react-query'
import { pathTo } from 'constants/paths'
import { useNavigate } from 'react-router-dom'
import { AuthService } from 'services/auth-service'

export function useRegister() {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: AuthService.register,
        onSuccess: () => navigate(pathTo.login),
    })
}
