import { useMutation } from '@tanstack/react-query'
import { AuthService } from 'services/auth-service'

export const useLogin = () =>
    useMutation({
        mutationFn: AuthService.login,
        onSuccess: ({ data }) => console.log(data),
    })
