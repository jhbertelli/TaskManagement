import { Button as MantineButton } from '@mantine/core'
import { LinkButton, LinkButtonProps } from './LinkButton'

type ButtonProps = PartialProperty<LinkButtonProps, 'path'>

export const Button = ({ path, ...props }: ButtonProps) => {
    return path ? <LinkButton path={path} {...props} /> : <MantineButton {...props} />
}
