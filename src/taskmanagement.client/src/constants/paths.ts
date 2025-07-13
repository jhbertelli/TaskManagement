const REGISTER = 'register'
const LOGIN = 'login'
const ASSIGNMENTS = 'assignments'
const CREATE_ASSIGNMENT = ASSIGNMENTS + '/create'
const ASSIGNMENT = ASSIGNMENTS + '/:id'
const COMPLETE_ASSIGNMENT = ASSIGNMENT + '/complete'
const CANCEL_ASSIGNMENT = ASSIGNMENT + '/cancel'

export const paths = {
    register: REGISTER,
    login: LOGIN,
    assignments: ASSIGNMENTS,
    createAssignment: CREATE_ASSIGNMENT,
    assignment: ASSIGNMENT,
    completeAssignment: COMPLETE_ASSIGNMENT,
    cancelAssignment: CANCEL_ASSIGNMENT,
}

const pathTo = {
    register: `/${REGISTER}`,
    login: `/${LOGIN}`,
    assignments: `/${ASSIGNMENTS}`,
    createAssignment: `/${CREATE_ASSIGNMENT}`,
    assignment: (id: string) => `/${ASSIGNMENTS}/${id}`,
    completeAssignment: (id: string) => `/${ASSIGNMENTS}/${id}/complete`,
    cancelAssignment: (id: string) => `/${ASSIGNMENTS}/${id}/cancel`,
}

export { pathTo }
