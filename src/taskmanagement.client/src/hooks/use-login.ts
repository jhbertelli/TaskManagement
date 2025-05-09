import { useMutation } from '@tanstack/react-query'
import { LoginSchema } from 'schemas'

export const useLogin = () =>
    useMutation({
        mutationFn: async (props: LoginSchema) => {
            console.log(props)
            return { result: 'mock' }
        },
    })
