import { Button, PasswordInput, Title } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form } from '../components/Form'
import { registerPageSchema, RegisterPageSchema } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterPageSchema>({
        resolver: zodResolver(registerPageSchema),
    })

    const onSubmit: SubmitHandler<RegisterPageSchema> = (data) => console.log(data)

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <Title className="text-center">Login</Title>

                <Form.Input
                    type="email"
                    label="E-mail"
                    placeholder="Insira o seu endereço de e-mail..."
                    {...register('email')}
                    error={errors.email}
                />

                <Form.Input
                    as={PasswordInput}
                    label="Senha"
                    placeholder="Insira a sua senha..."
                    type="password"
                    {...register('password', { required: { value: true, message: 'This field is required' } })}
                    error={errors.password}
                />
            </div>

            <div className="flex flex-col gap-4">
                <Button type="submit" variant="default">
                    Não possui uma conta?
                </Button>

                <Button type="submit" color="dark">
                    Login
                </Button>
            </div>
        </Form>
    )
}
