import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordInput, Title } from '@mantine/core'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { pathTo } from 'constants/paths'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginPageSchema, LoginPageSchema } from 'schemas'

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginPageSchema>({
        resolver: zodResolver(loginPageSchema),
    })

    const onSubmit: SubmitHandler<LoginPageSchema> = (data) => console.log(data)

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
                    withAsterisk
                />

                <Form.Input
                    as={PasswordInput}
                    label="Senha"
                    placeholder="Insira a sua senha..."
                    {...register('password')}
                    error={errors.password}
                    withAsterisk
                />
            </div>

            <div className="flex flex-col gap-4">
                <Button variant="default" path={pathTo.register} fullWidth>
                    Não possui uma conta?
                </Button>

                <Button type="submit" color="dark">
                    Login
                </Button>
            </div>
        </Form>
    )
}
