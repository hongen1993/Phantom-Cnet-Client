import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'

import UserAPI from '../../services/user.service'

import "./ProfilePage.css"
import { Container, Row, Col } from 'react-bootstrap'

import Project from '../../components/Project/Project'
import CreateProject from '../../components/CreateProject/CreateProject'

const ProfilePage = () => {

  const { user } = useContext(AuthContext)
  // console.log(user)
  const [userDB, setUserDB] = useState(undefined)

  const [loading, setLoading] = useState(true)

  const [projects, setProjects] = useState([])

  const settingProjects = (user) => {
    UserAPI
      .getProfile(user._id)
      .then((userData) => {
        if (userData) {
          setUserDB(userData)
          setProjects(userData.results.projects)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    settingProjects(user)
  }, [])

  if (loading) {
    // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div>
        <h1>Profile page</h1>
        <p>{userDB.results.user.email}</p>
        <p>{userDB.results.user.name}</p>
        <Link to={`/profile/edit/${userDB.results.user._id}`}>Edit Profile</Link>
      </div>
      <CreateProject settingProjects={settingProjects} />
      <Container>
        <Row>
          {
            projects.map((projectDB) => {
              return (
                <Col sm={3} >
                  <Project key={projectDB._id} projectDB={projectDB} settingProjects={settingProjects} />
                  <Link to={`/project/${projectDB._id}`}>Enter</Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default ProfilePage