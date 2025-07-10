import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox, Textarea, Title } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { AlertTypeSelect } from 'components/AlertTypeSelect'
import { AssignedUserSelect } from 'components/AssignedUserSelect'
import { AssignmentPrioritySelect } from 'components/AssignmentPrioritySelect'
import { AssignmentSectionSelect } from 'components/AssignmentSectionSelect'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { useCreateAssignment } from 'hooks/use-create-assignment'
import { Calendar } from 'react-feather'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTitle } from 'react-use'
import { CreateAssignmentSchema, createAssignmentSchema } from 'schemas/assignments/create-assignment'

export const CreateAssignmentPage = () => {
    const createAssignment = useCreateAssignment()

    useTitle('Criar tarefa')

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<CreateAssignmentSchema>({
        resolver: zodResolver(createAssignmentSchema),
    })

    const onSubmit: SubmitHandler<CreateAssignmentSchema> = async (data) => await createAssignment.mutateAsync(data)

    const isImportant = watch('section') === 'Important'
    const receiveAlert = watch('receiveAlert')

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <Title>Adicionar tarefa</Title>

                <Form.Input
                    label="Nome"
                    placeholder="Insira o nome da tarefa..."
                    {...register('name')}
                    error={errors.name}
                    withAsterisk
                />

                <AssignedUserSelect
                    {...register('assignedUserId')}
                    onChange={(value) => setValue('assignedUserId', value)}
                    error={errors.assignedUserId?.message}
                    withAsterisk
                />

                <DatePickerInput
                    label="Prazo"
                    placeholder="Insira o prazo da tarefa..."
                    {...register('deadline')}
                    onChange={(value) => setValue('deadline', value?.toISOString() ?? '')}
                    error={errors.deadline?.message}
                    withAsterisk
                    rightSection={<Calendar />}
                    rightSectionPointerEvents="none"
                />

                <AssignmentPrioritySelect
                    {...register('priority')}
                    onChange={(value) => setValue('priority', value)}
                    error={errors.priority?.message}
                    withAsterisk
                />

                <Textarea
                    resize="vertical"
                    label="Descrição"
                    placeholder="Insira a descrição da tarefa..."
                    {...register('description')}
                    error={errors.description?.message}
                />

                <AssignmentSectionSelect
                    {...register('section')}
                    onChange={(value) => setValue('section', value)}
                    error={errors.section?.message}
                    withAsterisk
                />

                {isImportant && <Checkbox {...register('receiveAlert')} label="Alertar" />}

                {receiveAlert && (
                    <AlertTypeSelect
                        {...register('alertType')}
                        onChange={(value) => setValue('alertType', value)}
                        error={errors.alertType?.message}
                        withAsterisk
                    />
                )}
            </div>

            <Button type="submit" color="dark">
                Criar tarefa
            </Button>
        </Form>
    )
}
