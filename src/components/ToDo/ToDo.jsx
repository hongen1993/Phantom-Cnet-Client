import { useEffect, useState } from 'react'
import ProjectAPI from '../../services/project.service'
import { Col, Form, Button } from 'react-bootstrap'

const ToDo = ({ projectData }) => {
    const [editing, setEditing] = useState(false)
    const [project, setProject] = useState(projectData)

    const handleClick = (value) => {
        setEditing(value)
    }

    const _updateNewProject = (event, index) => {
        const { name, value } = event.target

        const _projectData = JSON.parse(JSON.stringify(project))
        _projectData[name][index] = value
        setProject(_projectData)
    }

    const _updateProject = (event) => {
        event.preventDefault()
        ProjectAPI
            .updateProjectById(project._id, project)
            .then(() => {
                setEditing(false)
            })
    }

    const addTask = () => {

        const newtask = 'Insert task'
        projectData.toDo.push(newtask)

        ProjectAPI
            .updateProjectById(projectData._id, projectData)
            .then(() => {
                // setEditing(true)
            })
    }

    // const removeTask = (index) => {
    //     projectData.toDo.splice(index - 1, 1)

    //     ProjectAPI
    //         .updateProjectById(projectData._id, projectData)
    //         .then(() => {
    //             setEditing(true)
    //         })
    // }

    if (editing === true) {
        return (
            <Form onSubmit={_updateProject}>
                {
                    project.toDo.map((text, index) => {
                        return (
                            <Form.Control
                                key={`toDO${index}`}
                                onChange={(e) => _updateNewProject(e, index)}
                                type='text'
                                name='toDo'
                                placeholder={text}
                                value={text}
                            />)
                    })
                }
                <Button variant='primary' type='submit' hidden />
            </Form>
        )
    } else {
        return (
            <div>
                <ul>{
                    project.toDo.map((text, index) => {
                        return (
                            <>
                                <div key={`toDo${index}`} onClick={() => { handleClick(true) }}>
                                    <li>
                                        <p>
                                            {index + 1}: {text}
                                        </p>
                                    </li>
                                </div>
                                {/* <button onClick={removeTask(index)}>Delete</button> */}
                            </>
                        )
                    })
                }
                </ul>
                <button onClick={addTask}>+</button>
            </div>
        )
    }

}
export default ToDo