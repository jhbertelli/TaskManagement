import axios from 'axios'
import { GetAllAssignmentsOutput, GetAssignmentOutput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/GetAssignment/'

export class GetAssignmentService {
    static async getAll() {
        return await axios.get<GetAllAssignmentsOutput>(servicePath + 'GetAll')
    }

    static async get(id: string) {
        return await axios.get<GetAssignmentOutput>(servicePath + id)
    }
}
