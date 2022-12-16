import { useContext, useEffect, useState, useRef } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Link, useNavigate } from "react-router-dom"

import UserAPI from '../../services/user.service'
import ProjectAPI from '../../services/project.service'

import "./UserProjectsPage.css"
import { Container, Row, Col, Button } from 'react-bootstrap'

import ProjectCard from '../../components/ProjectCard/ProjectCard'
import CreateProject from '../../components/CreateProject/CreateProject'
import Navbar from "../../components/Navbar/Navbar"

import backgroundVideo from '../../components/Video/project-1video.mp4'

const UserProjectsPage = () => {

  const { user } = useContext(AuthContext)

  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [displayPage, setDisplayPage] = useState(true)

  const navigate = useNavigate()

  const videoRef = useRef()

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
    <>
      <Navbar />
      <div className={displayPage ? "projects-page" : "projects-pageB"}>
        <video ref={videoRef} className='videoTag' muted>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
        <div className='projects-page-h2'>
          <h2>___Projects___</h2>
        </div>
        <CreateProject settingProjects={settingProjects} />
        <Container>
          <Row>
            {
              projects.map((projectDB) => {
                return (
                  <Col className='projects-card' sm={4} key={projectDB._id}>
                    <Button className='delete-button' onClick={() => deleteProject(projectDB._id)}>
                      ✕
                    </Button>
                    <ProjectCard projectDB={projectDB} settingProjects={settingProjects} />
                    <Link className='enter-project-button'
                      onClick={() => {
                        setDisplayPage(false)
                        videoRef.current.play()
                        setTimeout(() => {
                          navigate(`/project/${projectDB._id}`)
                        }, 2300);
                      }}
                    // to={`/project/${projectDB._id}`}
                    >Enter</Link>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UserProjectsPage