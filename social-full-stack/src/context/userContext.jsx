import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { token, userClient } from "../client/api";

const UserContext = createContext(null)

//check if there is token ,if so assume there is user
    const initialUser = token() ? { username: null} : null

//custom provider wrap our app
function UserProvider({children }){

    //set initial state the null or temporary user.
    const [user,setUser] = useState(initialUser)

    

    const navigate = useNavigate()

    //useEffect that varifies the token and retrive user data
    useEffect(() => {

        async function getUser(){
            try{
                 //check if there is token,then we can skip step
        if (!token()) return

        //use the token to verify the user
        const user =await userClient.get('/')
        console.log(user)

        // if verified that token is legit ,take theuser data ans save it to state
                setUser(data)


            }catch(err){
console.log(err)
            }
        }

       
        
        //if verification fails, logout the user


    },[])
    const logout =()=>{
        //clearthe user state

       setUser(null)

        //clear the local storage
        localStorage.removeItem("token")

        //navigate user to login
        navigate('/login')
    }

    const value ={
        user,
        setUser, logout
    }


    return(
        <>
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
        </>
    )
}

//custom hook to axccess  context value
export function useUser(){
    return useContext(UserContext)
}


export default UserProvider



//provider wraps appln children