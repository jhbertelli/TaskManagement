import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea, Title } from '@mantine/core'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { useCancelAssignment } from 'hooks/use-cancel-assignment'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useTitle } from 'react-use'
import { CancelAssignmentSchema, cancelAssignmentSchema } from 'schemas/assignments'

type CancelAssignmentPageParams = Partial<{ id: string }>

export const CancelAssignmentPage = () => {
    const completeAssignment = useCancelAssignment()

    const { id = '' } = useParams<CancelAssignmentPageParams>()

    useTitle('Cancelar tarefa')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CancelAssignmentSchema>({
        resolver: zodResolver(cancelAssignmentSchema),
    })

    const onSubmit = useCallback<SubmitHandler<CancelAssignmentSchema>>(
        async (data) => await completeAssignment.mutateAsync({ ...data, id }),
        [completeAssignment, id]
    )

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <Title>Cancelar tarefa</Title>

                <Textarea
                    resize="vertical"
                    label="Observação"
                    placeholder="Insira o motivo do cancelamento da tarefa..."
                    {...register('cancellationReason')}
                    error={errors.cancellationReason?.message}
                    withAsterisk
                />
            </div>

            <Button type="submit" color="dark">
                Cancelar tarefa
            </Button>
        </Form>
    )
}
