import { useMutation } from '@tanstack/react-query'
import { AuthService } from 'services/auth-service'

export const useRegister = () =>
    useMutation({
        mutationFn: AuthService.register,
        onSuccess: () => console.log('todo: redirect to home'),
    })
