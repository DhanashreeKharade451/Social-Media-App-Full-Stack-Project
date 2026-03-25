import { Children, createContext, useState } from "react";

const UserContext = createContext(null)

function UserProvider(){
    const [user,setUser] = useState(null)

    const value ={
        user,
        setUser
    }


    return(
        <>
        <UserContext.Provider value={value}>
            {Children}
        </UserContext.Provider>
        </>
    )
}


export default UserProvider



//provider wraps appln children