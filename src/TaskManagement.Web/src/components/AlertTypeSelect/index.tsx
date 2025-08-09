import { Select, SelectProps } from '@mantine/core'
import { AssignmentAlertType } from 'services/assignments/types'

const options: AssignmentAlertType[] = ['Email', 'SMS']

type AlertTypeSelectProps = Omit<SelectProps, 'value' | 'onChange'> & {
    value?: AssignmentAlertType
    onChange?: (value: AssignmentAlertType) => void
}

export const AlertTypeSelect = ({
    label = 'Tipo de alerta',
    placeholder = 'Escolha o tipo de alerta...',
    onChange,
    ...props
}: AlertTypeSelectProps) => (
    <Select
        label={label}
        placeholder={placeholder}
        data={options}
        {...props}
        onChange={(value) => onChange?.(value as AssignmentAlertType)}
    />
)
