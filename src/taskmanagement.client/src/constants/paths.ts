export const paths = {
    register: 'register',
    login: 'login',
    assignments: 'assignments',
    createAssignment: 'assignments/create',
}

const pathTo = Object.fromEntries(Object.entries(paths).map(([key, value]) => [key, '/' + value])) as {
    [K in keyof typeof paths]: (typeof paths)[K]
}

export { pathTo }
