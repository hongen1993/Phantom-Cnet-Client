import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'
import UserAPI from '../../services/user.service'

import "./ProfilePage.css"
import CreateProject from '../../components/CreateProject/CreateProject'
import { Container, Row, Col } from 'react-bootstrap'

const ProfilePage = () => {

  const { user } = useContext(AuthContext)
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
    return <h1>Loading...</h1>;
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
            projects.map((project) => {
              return (
                <Col sm={3} key={project._id}>
                  <Form onSubmit={ }>
                    <Form.Control
                      onChange={ }
                      type='text'
                      name='strDrink'
                      value={ }
                      placeholder={project.title}
                    />
                  </Form>
                  <Link to={`/project/${project._id}`}>Enter</Link>
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