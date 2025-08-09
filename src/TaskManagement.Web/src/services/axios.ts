import axios from 'axios'
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage'

export function configureAuthorizationHeader() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)
}

configureAuthorizationHeader()
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
