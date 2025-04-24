import { ElementProps, InputBaseProps as MantineInputProps, PolymorphicComponentProps, TextInput } from '@mantine/core'
import { FC } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps<C> extends Omit<PolymorphicComponentProps<'input', MantineInputProps>, 'error'> {
    as?: C
    error?: FieldError
}

// TODO: fix not all props showing correctly (see PasswordInput in RegisterPage)
export const Input = <C extends FC<ElementProps<'input', 'size'>>>({ as, error, ...rest }: InputProps<C>) => {
    const Component = as ?? TextInput

    return <Component {...rest} error={error?.message} />
}
