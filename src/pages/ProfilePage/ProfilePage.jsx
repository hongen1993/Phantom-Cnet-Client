import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom';

import "./ProfilePage.css"

const ProfilePage = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Profile page</h1>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <Link to={`/profile/edit/${user._id}`}>Edit Profile</Link>
    </div>
  );
}

export default ProfilePage