import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link } from 'react-router-dom'

import UserAPI from '../../services/user.service'
import ProjectAPI from '../../services/project.service'

import "./ProfilePage.css"
import { Container, Row, Col, Button } from 'react-bootstrap'

import Project from '../../components/Project/Project'
import CreateProject from '../../components/CreateProject/CreateProject'

const ProfilePage = () => {

  const { user } = useContext(AuthContext)
  // console.log(user)

  const [loading, setLoading] = useState(true)

  const [projects, setProjects] = useState([])

  const settingProjects = (user) => {
    UserAPI
      .getProfile(user._id)
      .then((userData) => {
        if (userData) {
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

  const deleteProject = (id) => {
    ProjectAPI
      .deleteProjectById(id)
      .then((
        settingProjects(user)
      ))
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
        <h2>Projects</h2>
      </div>
      <CreateProject settingProjects={settingProjects} />
      <Container>
        <Row>
          {
            projects.map((projectDB) => {
              return (
                <Col sm={3} key={projectDB._id}>
                  <Project projectDB={projectDB} settingProjects={settingProjects} />
                  <Link to={`/project/${projectDB._id}`}>Enter</Link>
                  <Button variant='secondary' onClick={() => deleteProject(projectDB._id)}>
                    Delete
                  </Button>
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