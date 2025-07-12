import axios from 'axios'
import { CompleteAssignmentInput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/UpdateAssignment/'

export class UpdateAssignmentService {
    static async complete(input: CompleteAssignmentInput) {
        return await axios.patch<void>(servicePath + 'Complete', input)
    }
}
