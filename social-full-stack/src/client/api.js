import axios from 'axios'

export const token =() => localStorage.getItem('token')
//let token = localStorage.getItem('token')
export const userClient = axios.create({
    baseURL: 'http://localhost:3000/api/users',
    headers:{
        Authorization: `Bearer ${token()}`
    }
})

export const postClient =axios.create({
    baseURL: 'http://localhost:3000/api/posts',
    headers: {
        Authorization: `Bearer ${token()}`
    }
})

postClient.interceptors.request.use((req) => {
    
    if (token()){
        req.headers.Authorization =`Bearer ${token()}`
    }

    return req
})