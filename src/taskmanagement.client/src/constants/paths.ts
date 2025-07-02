export const paths = {
    register: 'register',
    login: 'login',
    assignments: '',
}

const pathTo = Object.fromEntries(Object.entries(paths).map(([key, value]) => [key, '/' + value]))

export { pathTo }
