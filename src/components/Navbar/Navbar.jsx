import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Button } from 'react-bootstrap'

import SideBar from "../SideBar/SideBar"

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/profile">
            <Button>Projects</Button>
          </Link>
          <Button onClick={logOutUser}>Logout</Button>

          <SideBar user={user} />

          {user.role === 'Admin' && (
            <Link to='/users'>
              <Button>All Users</Button>
            </Link>
          )}

        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <Button>Sign Up</Button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <Button>Login</Button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar
