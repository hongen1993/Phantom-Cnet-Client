import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom';

import ProjectAPI from '../../services/project.service'

const UpdateProject = () => {
    const { id } = useParams()
    const [project, setProject] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
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
    }, [])

    const editNewProject = (event) => {
        const { name, value } = event.target
        setProject({ ...project, [name]: value })
    }

    const editProject = (event) => {
        event.preventDefault();
        ProjectAPI
            .editProjectById(id, project)
            .then(() => {
                Navigate(`/project/${id}`)
            })
    }

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>;
    }

    const projectData = project.project
    return (
        <>
            <h2>{projectData.title}</h2>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h3>To Do</h3>
                        {
                            projectData.toDo.map((task) => {
                                return <p>{task}</p>
                            })
                        }
                    </Col>
                    <Col sm={4}>
                        <h3>In process
                            {
                                projectData.inProcess.map((task) => {
                                    return <p>{task}</p>
                                })
                            }
                        </h3></Col>
                    <Col sm={4}>
                        <h3>Done</h3>
                        {
                            projectData.done.map((task) => {
                                return <p>{task}</p>
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UpdateProject