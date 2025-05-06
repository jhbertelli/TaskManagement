import { HTMLAttributes } from 'react'
import { Input } from './Input'

const InternalForm = (props: HTMLAttributes<HTMLFormElement>) => <form {...props} />

export const Form = Object.assign(InternalForm, { Input })
