import { HTMLAttributes } from 'react'
import { Input as InternalInput } from './Input'
import { PasswordInput } from './PasswordInput'

const InternalForm = (props: HTMLAttributes<HTMLFormElement>) => <form {...props} />

const Input = Object.assign(InternalInput, { Password: PasswordInput })

export const Form = Object.assign(InternalForm, { Input })
