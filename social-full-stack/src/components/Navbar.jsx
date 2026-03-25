import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

function Navbar(){

    const {user} = useUser()
    return(
        <nav>
            {user && <p>Welcome {user.username}!</p>}
           <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
            <li><Link to="feed">Feed </Link></li>
           </ul>
        </nav>
    )
}

export default Navbar;