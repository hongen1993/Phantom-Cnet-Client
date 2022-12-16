import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Button } from 'react-bootstrap'

import SideBar from "../SideBar/SideBar"

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    < header >
      <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHRuFZ8VLSIxg/company-logo_200_200/0/1559573464734?e=2147483647&v=beta&t=NlMUr-2x9flE3328dyaojHaVure_AiAT1p2Qg7T6Qss" alt="logo" class="logo" />
      <nav>
        <ul className="nav__links">
          <li className="navlinks-li"><Link to="/">Home</Link></li>
          {isLoggedIn && (
            <>
              <li className="navlinks-li"><Link to="/projects">Projects</Link></li>
              <li className="navlinks-li"><Link onClick={logOutUser}>Logout</Link></li>
              <li className="navlinks-li"><SideBar user={user} /></li>
              {user.role === 'Admin' && (
                <li className="navlinks-li"><Link to='/users'>All Users</Link></li>
              )}
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link className="cta" to="/login"><button>Login</button></Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
