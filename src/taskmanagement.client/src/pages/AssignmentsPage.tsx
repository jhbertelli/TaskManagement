import { Affix, ThemeIcon, Title } from '@mantine/core'
import { AssignmentListItem } from 'components/AssignmentListItem'
import { pathTo } from 'constants/paths'
import { useAssignments } from 'hooks/use-assignments'
import { Plus } from 'react-feather'
import { Link } from 'react-router-dom'
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
                {assignments?.data.map((assignment) => (
                    <AssignmentListItem {...assignment} key={assignment.id} />
                ))}
            </div>

            <Affix position={{ bottom: 20, right: 0, left: 0 }} className="text-center">
                <Link to={pathTo.createAssignment}>
                    <ThemeIcon color="dark" radius="xl" size="xl" className="drop-shadow-lg/30">
                        <Plus />
                    </ThemeIcon>
                </Link>
            </Affix>
        </main>
    )
}
