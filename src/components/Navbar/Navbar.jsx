import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"

import { MdAccountCircle } from 'react-icons/md'
import { RiCloseCircleLine } from 'react-icons/ri'

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sideBar)

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/#" className='open-profile'>
            <MdAccountCircle size={30} onClick={showSideBar} />
          </Link>
          <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to='#' className="menu-bars">
                  <RiCloseCircleLine />
                </Link>
              </li>
            </ul>
          </nav>
          {user.role === 'Admin' && (
            <Link to='/users'>
              <button>All Users</button>
            </Link>
          )}

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
