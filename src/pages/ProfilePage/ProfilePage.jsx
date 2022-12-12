import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
import UserAPI from '../../services/user.service'

import "./ProfilePage.css"
import Project from '../../components/Project/Project'

const ProfilePage = () => {

  const { user } = useContext(AuthContext)
  console.log(user)
  const [userDB, setUserDB] = useState(undefined)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserAPI
      .getUserById(user._id)
      .then((userData) => {
        if (userData) setUserDB(userData)
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <h1>Profile page</h1>
        <p>{user.email}</p>
        <p>{user.name}</p>
        <Link to={`/profile/edit/${user._id}`}>Edit Profile</Link>
      </div>
      <Project user={userDB} />
    </div>
  );
}

export default ProfilePage