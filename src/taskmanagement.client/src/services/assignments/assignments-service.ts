import axios from 'axios'
import { GetAllAssignmentsOutput, GetAssignmentOutput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/Assignments/'

export class AssignmentsService {
    static async getAll() {
        return await axios.get<GetAllAssignmentsOutput>(servicePath)
    }

    static async get(id: string) {
        return await axios.get<GetAssignmentOutput>(servicePath + id)
    }
}
