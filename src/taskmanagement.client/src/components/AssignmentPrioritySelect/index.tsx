import { Select, SelectProps } from '@mantine/core'
import { AssignmentPriority } from 'services/assignments/types'

const options: AssignmentPriority[] = ['Low', 'Medium', 'High']

type AssignmentPrioritySelectProps = Omit<SelectProps, 'value' | 'onChange'> & {
    value?: AssignmentPriority
    onChange?: (value: AssignmentPriority) => void
}

export const AssignmentPrioritySelect = ({
    label = 'Prioridade',
    placeholder = 'Escolha a prioridade da tarefa...',
    onChange,
    ...props
}: AssignmentPrioritySelectProps) => (
    <Select
        label={label}
        placeholder={placeholder}
        data={options}
        {...props}
        onChange={(value) => onChange?.(value as AssignmentPriority)}
    />
)
