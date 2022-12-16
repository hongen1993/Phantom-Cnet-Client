import "./SignupPage.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"
import { Button } from 'react-bootstrap'
import Navbar from "../../components/Navbar/Navbar"

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [image, setImage] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleName = (e) => setName(e.target.value)
  const handleSurname = (e) => setSurname(e.target.value)
  const handleImage = (e) => setImage(e.target.value)

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { email, password, name, surname, image }

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login")
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }
  console.log(image)
  return (
    <>
      <Navbar />
      <div className="signup-page">
        <div className="signup-form">
          <form onSubmit={handleSignupSubmit}>
            <h1 id="form-head">Sign Up</h1>
            <div id="input-area">
              <div>
                <input className="input-box" type="text" name="name" value={name} onChange={handleName} placeholder="Name" />

              </div>
              <div>
                <input className="input-box" type="text" name="surname" value={surname} onChange={handleSurname} placeholder="Surname" />

              </div>
              <div>
                <input className="input-box" type="email" name="email" value={email} onChange={handleEmail} placeholder="E-mail" />
              </div>
              <div>
                <input
                  className="input-box"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Password"
                />

              </div>
              <label>Image</label>
              <input type="text" name="image" onChange={handleImage} required />
              <img src={image} alt='image' />

              <input id="btn" type="submit" value="Sign Up" />

            </div>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div class='already-account'>
            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;

