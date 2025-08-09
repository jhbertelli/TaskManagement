import axios from 'services/axios'
import { LoginInput, LoginResponseOutput, RegisterInput } from './types'

const servicePath = import.meta.env.VITE_BACKEND_URL + 'api/Auth/'

export class AuthService {
    static async register(input: RegisterInput) {
        return await axios.post<void>(servicePath + 'Register', input)
    }

    static async login(input: LoginInput) {
        return await axios.post<LoginResponseOutput>(servicePath + 'Login', input)
    }
}
