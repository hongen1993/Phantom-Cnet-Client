import { useEffect, useState, useContext } from "react"
import { Container, Button } from 'react-bootstrap'

import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

import ProjectAPI from '../../services/project.service'
import UserAPI from '../../services/user.service'

import ProjectTaskBoard from "../../components/ProjectTaskBoard/ProjectTaskBoard"
import Partners from "../../components/Partners/Partners"

import './UserProjectPage.css'

const UpdateProject = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [project, setProject] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [projectPartners, setprojectPartners] = useState(user.email)

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
        <div className="project-page">
            <h2>{projectData.title}</h2>
            <ProjectTaskBoard projectData={projectData} updateProjectDB={updateProjectDB} />
            <p>Project users: {projectPartners.map((partner, key) => <Button key={key}
                onClick={() => {

                }}>{partner} </Button>
            )}</p>
            <Button onClick={handleShowSearch} >Add partner</Button>
            <div>
                <Partners projectData={projectData} settingProject={settingProject} setProjectUsers={setProjectUsers} show={show} id={id} />
            </div>
        </div>
    )
}

export default UpdateProject