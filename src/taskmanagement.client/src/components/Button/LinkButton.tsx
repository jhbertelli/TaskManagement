import { Button, ButtonProps } from '@mantine/core'
import { ButtonHTMLAttributes } from 'react'
import { Link, To } from 'react-router-dom'

export type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonProps & {
        path: To
    }

export const LinkButton = ({ path, ...rest }: LinkButtonProps) => (
    <Link to={path}>
        <Button {...rest} />
    </Link>
)
