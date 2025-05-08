import { zodResolver } from '@hookform/resolvers/zod'
import { PasswordInput, Title } from '@mantine/core'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { pathTo } from 'constants/paths'
import { SubmitHandler, useForm } from 'react-hook-form'
import { registerPageSchema, RegisterPageSchema } from 'schemas'

export const RegisterPage = () => {
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
                <Title className="text-center">Cadastro</Title>

                <Form.Input label="Nome" placeholder="Insira o seu nome..." {...register('name')} error={errors.name} />

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
                    {...register('password')}
                    error={errors.password}
                />

                <Form.Input
                    as={PasswordInput}
                    label="Repita sua senha"
                    placeholder="Insira novamente a sua senha..."
                    type="password"
                    {...register('repeatPassword')}
                    error={errors.repeatPassword}
                />
            </div>

            <div className="flex flex-col gap-4">
                <Button variant="default" path={pathTo.login} fullWidth>
                    Já possui uma conta?
                </Button>

                <Button type="submit" color="dark">
                    Cadastrar
                </Button>
            </div>
        </Form>
    )
}
