import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

function Navbar() {
  const { user } = useUser();
  return (
    <nav>
 {user && <p>Welcome {user.username}!</p>}
 <ul>
        {user ?
        <>
        <li>
          <Link to="feed">Feed </Link>
        </li>
        <li>
        <Link to="feed">Feed </Link>
        </li>
        </>
        
        :
        <>
         <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
        </>
    } 
      </ul>
    </nav>
  );
}

export default Navbar;
