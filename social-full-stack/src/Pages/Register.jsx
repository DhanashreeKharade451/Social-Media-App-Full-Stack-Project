import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import { userClient } from "../client/api";
import { useUser } from "../context/userContext";
import UserProvider from "../context/userContext";


function Register(){

    //bring in the setter function from the context
    const {setUser} =useUser()

    //properties here should match with backend schema
const [form, setForm] = useState({
    username: '',
    email:'',
    password: ''
})

//its eventhandlerfunction ,userc
const handleChange = (e) => {
    setForm({
        ...form,
        //updating either uname email or password
        [e.target.name]: e.target.value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(form)

    try{
          //send the form data to our backend
         const {data} = await userClient.post('/register', form)
         console.log(data)

         //teke the token and store it locally
    localStorage.setItem("token", data.token)

    //save some user data in our state
    setUser(data.user)

    //take the user to different page
        Navigate("/feed")

    }catch{
        console.log(err)
        alert(err.message)
    }

  

    
    

    

}

    return(
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input value={form.username} 
                onChange={handleChange}
                id="username" name = "username" type="text" required />

                <label htmlFor="email">Email</label>
                <input value={form.email} onChange={handleChange} id="email" name = "email" type="email" required />

                <label htmlFor="password">Password</label>
                <input value={form.password} onChange={handleChange} id="password" name = "password" type="password" required />

                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;