import ProjectAPI from '../../services/project.service'
import { AuthContext } from '../../context/auth.context'

import { Form, Button } from 'react-bootstrap'

import { useState, useContext } from 'react'


const Project = ({ projectDB, settingProjects }) => {
    const { user } = useContext(AuthContext)
    const [editing, setEditing] = useState(false)
    const [project, setProject] = useState(undefined)

    const handleClick = (value) => {
        setEditing(value)
    }

    const updateNewProject = (event) => {
        const { name, value } = event.target
        setProject({ ...projectDB, [name]: value })
    }
    const updateProject = (event) => {
        event.preventDefault()
        ProjectAPI
            .updateProjectById(project._id, project)
            .then(() => {
                settingProjects(user)
            })
            .then(() => {
                setEditing(false)
            })
    }
    if (editing === true) {
        return (
            <Form onSubmit={updateProject}>
                <Form.Control
                    onChange={updateNewProject}
                    type='text'
                    name='title'
                    placeholder={projectDB.title}
                />
                <Button variant='primary' type='submit' hidden />

            </Form>
        )
    } else {
        return (
            <div onClick={() => { handleClick(true) }}>
                <h3>{projectDB.title}</h3>
            </div>
        )
    }

}

export default Project