import { ComboboxData, Select, SelectProps } from '@mantine/core'
import { useGetAvailableAssignees } from 'hooks/use-get-available-assignees'
import { User } from 'react-feather'

type AssignedUserSelectProps = Omit<SelectProps, 'value' | 'onChange'> & {
    value?: string
    onChange?: (value: string) => void
}

export const AssignedUserSelect = ({
    label = 'Pessoa atribuída',
    placeholder = 'Informe a pessoa a ser atribuída à tarefa...',
    onChange,
    ...props
}: AssignedUserSelectProps) => {
    const { data: assignees = [] } = useGetAvailableAssignees()

    const options: ComboboxData = assignees?.map((assignee) => ({
        label: `${assignee.userName} (${assignee.userEmail})`,
        value: assignee.userId,
    }))

    return (
        <Select
            label={label}
            placeholder={placeholder}
            data={options}
            {...props}
            onChange={(value) => onChange?.(value as string)}
            searchable
            nothingFoundMessage="Nenhum usuário encontrado"
            rightSection={<User />}
        />
    )
}
