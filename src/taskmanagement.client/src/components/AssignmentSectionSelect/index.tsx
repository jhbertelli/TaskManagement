import { Select, SelectProps } from '@mantine/core'
import { AssignmentSection } from 'services/assignments/types'

const values: AssignmentSection[] = ['Domestic', 'Work', 'Leisure', 'Important']

type AssignmentSectionSelectProps = Omit<SelectProps, 'value' | 'onChange'> & {
    value?: AssignmentSection
    onChange?: (value: AssignmentSection) => void
}

export const AssignmentSectionSelect = ({
    label = 'Setor',
    placeholder = 'Escolha o setor da tarefa...',
    onChange,
    ...props
}: AssignmentSectionSelectProps) => (
    <Select
        label={label}
        placeholder={placeholder}
        data={values}
        {...props}
        onChange={(value) => onChange?.(value as AssignmentSection)}
    />
)
