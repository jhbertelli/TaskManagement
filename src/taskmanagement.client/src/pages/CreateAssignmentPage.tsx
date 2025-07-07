import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from '@mantine/core'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTitle } from 'react-use'
import { DatePickerInput } from '@mantine/dates'
import { CreateAssignmentSchema, createAssignmentSchema } from 'schemas/assignments/create-assignment'
import { Calendar } from 'react-feather'

export const CreateAssignmentPage = () => {
    // const createAssignment = useCreateAssignment()

    useTitle('Criar tarefa')

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<CreateAssignmentSchema>({
        resolver: zodResolver(createAssignmentSchema),
    })

    const onSubmit: SubmitHandler<CreateAssignmentSchema> = async (data) => console.log(data)

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

                {/* TODO: Create search users input */}
                <Form.Input
                    label="Pessoa atribuída"
                    placeholder="Este campo será substituido por um componente mais adequado"
                    {...register('assignedUserId')}
                    error={errors.name}
                    withAsterisk
                />

                <DatePickerInput
                    label="Prazo"
                    placeholder="Insira o prazo da tarefa..."
                    {...register('deadline')}
                    onChange={(value) => setValue('deadline', value?.toISOString() ?? '')}
                    error={errors.name?.message}
                    withAsterisk
                    rightSection={<Calendar />}
                    rightSectionPointerEvents="none"
                />
            </div>

            <Button type="submit" color="dark">
                Criar tarefa
            </Button>
        </Form>
    )
}
