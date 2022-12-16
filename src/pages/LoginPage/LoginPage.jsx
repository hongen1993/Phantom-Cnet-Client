import "./LoginPage.css"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import authService from "../../services/auth.service"
import { Button } from 'react-bootstrap'
import Navbar from "../../components/Navbar/Navbar"


function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const { storeToken, authenticateUser } = useContext(AuthContext)

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const requestBody = { email, password }

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.token)
        authenticateUser()
        navigate("/projects")
      })
      .catch((err) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = err.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <>
      <Navbar />
      <div className="login-page">
        <section id="content">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login Form</h1>
            <div>
              <input type="email" placeholder="Email" required="" id="email" value={email} onChange={handleEmail} />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                placeholder="Password"
                onChange={handlePassword}
              />
            </div>
            <div>
              <input type="submit" value="Log in" />
              <p>Don't have an account yet?</p>
              <Link to={"/signup"}> Sign Up</Link>
            </div>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </section>
      </div>
    </>
  )
}

export default LoginPage
