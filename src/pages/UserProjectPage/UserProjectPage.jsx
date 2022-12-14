import { useEffect, useState } from "react"
import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import ProjectAPI from '../../services/project.service'

import ProjectTaskBoard from "../../components/ProjectTaskBoard/ProjectTaskBoard"
import AddPartner from "../../components/AddPartner/AddPartner"

const UpdateProject = () => {
    const { id } = useParams()
    const [project, setProject] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)

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

    useEffect(() => {
        settingProject(id)
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }

    const handleShowSearch = () => setShow(!show);

    const projectData = project.project

    return (
        <>
            <h2>{projectData.title}</h2>
            <Button onClick={handleShowSearch} >Add partner</Button>

            <AddPartner projectData={projectData} settingProject={settingProject} show={show} id={id} />
            <Container>
                <ProjectTaskBoard projectData={projectData} updateProjectDB={updateProjectDB} />
            </Container>
        </>
    )
}

export default UpdateProject