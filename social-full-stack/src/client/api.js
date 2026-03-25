import axios from 'axios'

const userClient = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})