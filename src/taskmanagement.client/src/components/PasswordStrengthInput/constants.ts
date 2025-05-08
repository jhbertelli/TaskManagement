export const requirements: { regex: RegExp; label: string }[] = [
    { regex: /[0-9]/, label: 'A senha deve possuir pelo menos um número' },
    { regex: /[a-z]/, label: 'A senha deve possuir pelo menos uma letra minúscula' },
    { regex: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'A senha deve possuir pelo menos um caractere especial (!@-#.$%^&*)' },
    { regex: /[a-z0-9!@\-#.$%^&*]{8,}/, label: 'A senha deve possuir pelo menos 8 caracteres' },
]
