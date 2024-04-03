import axios from 'axios'

const api = axios.create({
    baseURL: 'https://authapi-i1aj.onrender.com/api'
})

export default api