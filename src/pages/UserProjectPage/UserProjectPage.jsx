import { useEffect, useState, useContext, useRef } from "react"
import { Container, Button } from 'react-bootstrap'

import { useParams, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

import ProjectAPI from '../../services/project.service'
import UserAPI from '../../services/user.service'

import ProjectTaskBoard from "../../components/ProjectTaskBoard/ProjectTaskBoard"
import Partners from "../../components/Partners/Partners"

import './UserProjectPage.css'
import backgroundVideo from '../../components/Video/project-2video.mp4'

const UpdateProject = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [project, setProject] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [projectPartners, setprojectPartners] = useState(user.email)
    const [displayPage, setDisplayPage] = useState(true)

    const navigate = useNavigate()
    const videoRef = useRef()

    const settingProject = (id) => {
        ProjectAPI
            .getProjectById(id)
            .then((dbProject) => {
                setProject(dbProject)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const updateProjectDB = (project) => {
        ProjectAPI
            .updateProjectById(project._id, project)
            .then(() => {
                settingProject(id)
                setProjectUsers()
            })
    }

    const setProjectUsers = () => {
        let aux = []
        ProjectAPI
            .getProjectById(id)
            .then((dbProject) => {
                setProject(dbProject)
                return dbProject
            })
            .then((dbProject) => {
                return Promise.all(dbProject.project.user.map((id) => {
                    return (
                        UserAPI
                            .getUserById(id)
                            .then((userDB) => {
                                aux.push(userDB.results.user.name);
                            })
                            .catch((err) => console.error(err))
                    )
                }))
            })
            .then(() => {
                setprojectPartners(aux)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        setProjectUsers()
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }

    const handleShowSearch = () => setShow(!show);

    const projectData = project.project

    return (
        <div className={displayPage ? "project-page" : 'project-pageB'}>
            <video ref={videoRef} className='videoTagB' muted>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <div className="project-page-title">
                <h3>{projectData.title}</h3>
            </div>
            <ProjectTaskBoard projectData={projectData} updateProjectDB={updateProjectDB} />
            <div className="project-users">
                <p>Project users: </p>
                <Button className='add-project-user' onClick={handleShowSearch} >+</Button>
                <div className='project-users-button'>
                    {projectPartners?.map((partner, index) =>
                        <div className='partner-card' key={`partner${index}`} >
                            <span>{partner}</span>
                            <button className='partner-card-button' onClick={() => {
                                project.project.user.splice(index, 1)
                                updateProjectDB(project.project)
                            }}>
                                ✕
                            </button>
                        </div>
                    )}
                </div>
            </div >
            <div className="project-users-form">
                <Partners projectData={projectData} settingProject={settingProject} setProjectUsers={setProjectUsers} show={show} id={id} />
            </div>
            <Button className='back-to-projects' onClick={() => {
                setDisplayPage(false)
                videoRef.current.play()
                setTimeout(() => {
                    navigate(`/projects`)
                }, 2300);
            }}>
                Back
            </Button>
        </div >
    )
}

export default UpdateProject