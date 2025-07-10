import axios from 'axios'
import { GetAllAssignmentOutput, GetAssignmentOutput, GetAvailableAssigneesOutput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/GetAssignment/'

export class GetAssignmentService {
    static async getAll() {
        return await axios.get<GetAllAssignmentOutput[]>(servicePath + 'GetAll')
    }

    static async get(id: string) {
        return await axios.get<GetAssignmentOutput>(servicePath + id)
    }

    static async getAvailableAssignees() {
        return await axios.get<GetAvailableAssigneesOutput[]>(servicePath + 'GetAvailableAssignees')
    }
}
