import { Title } from '@mantine/core'
import { AssignmentProperty } from 'components/AssignmentProperty'
import { Button } from 'components/Button'
import { pathTo } from 'constants/paths'
import { useGetAssignment } from 'hooks/use-get-assignment'
import { useParams } from 'react-router-dom'
import { useTitle } from 'react-use'

type ViewAssignmentPageParams = Partial<{ id: string }>

export const ViewAssignmentPage = () => {
    const { id = '' } = useParams<ViewAssignmentPageParams>()

    const { data: assignment } = useGetAssignment(id)

    useTitle('Visualização de tarefa')

    return (
        <main className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <Title className="pb-4">Visualização de tarefa</Title>

                <div className="flex flex-col gap-2">
                    <AssignmentProperty name="Nome" value={assignment?.name} />

                    <AssignmentProperty
                        name="Pessoa atribuída"
                        value={`${assignment?.assignedUserName} (${assignment?.assignedUserEmail})`}
                    />

                    <AssignmentProperty name="Prazo" value={assignment?.assignedUserName} />

                    <AssignmentProperty name="Prioridade" value={assignment?.priority} />

                    <AssignmentProperty name="Setor" value={assignment?.section} />

                    <AssignmentProperty name="Description" value={assignment?.description} inline={false} />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <Button variant="default" path={pathTo.cancelAssignment(id)} fullWidth>
                    Cancelar tarefa
                </Button>

                <Button color="dark" path={pathTo.completeAssignment(id)} fullWidth>
                    Concluir tarefa
                </Button>
            </div>
        </main>
    )
}
