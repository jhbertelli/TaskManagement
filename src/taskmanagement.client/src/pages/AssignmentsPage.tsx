import { Title } from '@mantine/core'
import { AssignmentListItem } from 'components/AssignmentListItem'
import { useAssignments } from 'hooks/use-assignments'
import { useTitle } from 'react-use'

export const AssignmentsPage = () => {
    const { data: assignments } = useAssignments()

    useTitle('Lista de tarefas')

    return (
        <main className="h-full block">
            <div className="flex flex-col gap-4">
                <Title>Lista de tarefas</Title>

                <hr className="w-40" />
            </div>

            <div className="mt-6 flex flex-col gap-2">
                {assignments?.data.result.map((assignment) => (
                    <AssignmentListItem {...assignment} key={assignment.id} />
                ))}
            </div>
        </main>
    )
}
