import axios from 'services/axios'
import { CreateAssignmentInput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/CreateAssignment/'

export class CreateAssignmentService {
    static async create(input: CreateAssignmentInput) {
        return await axios.post<void>(servicePath + 'Create', input)
    }
}
