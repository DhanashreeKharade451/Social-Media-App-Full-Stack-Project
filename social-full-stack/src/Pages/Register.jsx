import { useState } from "react";

import { userClient } from "../client/api";

function Register(){

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

const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)

    try{
          //send the form data to our backend
          userClient.post('/register', form)
    }catch{
        console.log(err)
        alert(err.message)
    }

  

    //teke the token and store it locally

    //save some user data in our state

    //take the user to different page

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