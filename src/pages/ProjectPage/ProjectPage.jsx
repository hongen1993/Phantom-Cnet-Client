import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ProjectWorkPlace from "../../components/ProjectWorkPlace/ProjectWorkPlace";

import ProjectAPI from '../../services/project.service'

const UpdateProject = () => {
    const { id } = useParams()
    const [project, setProject] = useState(undefined)
    const [loading, setLoading] = useState(true)

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

    useEffect(() => {
        settingProject(id)
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>;
    }

    const projectData = project.project

    return (
        <>
            <h2>{projectData.title}</h2>
            <Container>
                <ProjectWorkPlace projectData={projectData} settingProject={settingProject} id={id} />
            </Container>
        </>
    )
}

export default UpdateProject