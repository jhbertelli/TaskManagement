const REGISTER = 'register'
const LOGIN = 'login'
const ASSIGNMENTS = 'assignments'
const CREATE_ASSIGNMENT = ASSIGNMENTS + '/create'
const ASSIGNMENT = ASSIGNMENTS + '/:id'

export const paths = {
    register: REGISTER,
    login: LOGIN,
    assignments: ASSIGNMENTS,
    createAssignment: CREATE_ASSIGNMENT,
    assignment: ASSIGNMENT,
}

const pathTo = {
    register: `/${REGISTER}`,
    login: `/${LOGIN}`,
    assignments: `/${ASSIGNMENTS}`,
    createAssignment: `/${CREATE_ASSIGNMENT}`,
    assignment: (id: string) => `/${ASSIGNMENTS}/${id}`,
}

export { pathTo }
