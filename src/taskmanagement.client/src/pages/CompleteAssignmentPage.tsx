import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea, Title } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { useCompleteAssignment } from 'hooks/use-complete-assignment'
import { useCallback } from 'react'
import { Calendar } from 'react-feather'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useTitle } from 'react-use'
import { CompleteAssignmentSchema, completeAssignmentSchema } from 'schemas/assignments'

type CompleteAssignmentPageParams = Partial<{ id: string }>

export const CompleteAssignmentPage = () => {
    const completeAssignment = useCompleteAssignment()

    const { id = '' } = useParams<CompleteAssignmentPageParams>()

    useTitle('Concluir tarefa')

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<CompleteAssignmentSchema>({
        resolver: zodResolver(completeAssignmentSchema),
    })

    const onSubmit = useCallback<SubmitHandler<CompleteAssignmentSchema>>(
        async (data) => await completeAssignment.mutateAsync({ ...data, id }),
        [completeAssignment, id]
    )

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <Title>Concluir tarefa</Title>

                <DatePickerInput
                    label="Data de conclusão"
                    placeholder="Insira a data de conclusão da tarefa..."
                    {...register('conclusionDate')}
                    onChange={(value) => setValue('conclusionDate', value?.toISOString() ?? '')}
                    error={errors.conclusionDate?.message}
                    withAsterisk
                    rightSection={<Calendar />}
                    rightSectionPointerEvents="none"
                />

                <Textarea
                    resize="vertical"
                    label="Observação"
                    placeholder="Insira uma observação..."
                    {...register('conclusionNote')}
                    error={errors.conclusionNote?.message}
                />
            </div>

            <Button type="submit" color="dark">
                Concluir tarefa
            </Button>
        </Form>
    )
}
