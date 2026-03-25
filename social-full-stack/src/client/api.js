import axios from 'axios'

let token = localStorage.getItem('token')
export const userClient = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})

export const postClient =axios.create({
    baseURL: 'http://localhost:3000/api/post',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

postClient.interceptors.request.use((req) => {
    console.log(req)
    return req

    if (token){
        req.headers.Authorization =`Bearer ${token}`
    }

    return req
})