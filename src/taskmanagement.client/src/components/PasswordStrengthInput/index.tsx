import { Popover, Progress } from '@mantine/core'
import { useEffect, useState } from 'react'
import { PasswordRequirement } from './PasswordRequirement'
import { requirements } from './constants'
import { getProgressColor, getStrength } from './helpers'
import { Form } from 'components/Form'
import { PasswordInputProps } from 'components/Form/PasswordInput'

interface PasswordStrengthInputProps extends PasswordInputProps {
    showRequirements?: boolean
}

export const PasswordStrengthInput = ({ showRequirements, ...rest }: PasswordStrengthInputProps) => {
    const [popoverOpened, setPopoverOpened] = useState(false)
    const [value, setValue] = useState('')

    const strength = getStrength(value)
    const color = getProgressColor(strength)

    useEffect(() => setPopoverOpened(!!showRequirements), [showRequirements])

    return (
        <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
            <Popover.Target>
                <div onFocusCapture={() => setPopoverOpened(true)} onBlurCapture={() => setPopoverOpened(false)}>
                    <Form.Input.Password
                        {...rest}
                        value={value}
                        onChange={(event) => setValue(event.currentTarget.value)}
                    />
                </div>
            </Popover.Target>
            <Popover.Dropdown>
                <Progress size={5} mb="xs" color={color} value={strength} />
                {requirements.map((requirement, i) => (
                    <PasswordRequirement
                        key={`${rest.name}_requirement_${i}`}
                        label={requirement.label}
                        isSatisfied={requirement.regex.test(value)}
                    />
                ))}
            </Popover.Dropdown>
        </Popover>
    )
}
