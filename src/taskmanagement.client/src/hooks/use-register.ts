import { useMutation } from '@tanstack/react-query'
import { RegisterSchema } from 'schemas'

export const useRegister = () =>
    useMutation({
        mutationFn: async (props: RegisterSchema) => {
            console.log(props)
            return { result: 'mock' }
        },
    })
