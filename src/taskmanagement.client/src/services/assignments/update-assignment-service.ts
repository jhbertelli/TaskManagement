import axios from 'services/axios'
import { CancelAssignmentInput, CompleteAssignmentInput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/UpdateAssignment/'

export class UpdateAssignmentService {
    static async complete(input: CompleteAssignmentInput) {
        return await axios.patch<void>(servicePath + 'Complete', input)
    }

    static async cancel(input: CancelAssignmentInput) {
        return await axios.patch<void>(servicePath + 'Cancel', input)
    }
}
