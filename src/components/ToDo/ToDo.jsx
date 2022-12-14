import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ToDo = ({ project, setProject, updateProjectDB }) => {
    const [editing, setEditing] = useState(false)

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

        updateProjectDB(project)
        setEditing(false)
    }

    const addTask = () => {
        const newtask = 'Insert task'

        project.toDo.push(newtask)
        updateProjectDB(project)
    }

    if (editing === true) {
        return (
            <Form onSubmit={_updateProject}>
                {
                    project?.toDo.map((text, index) => {
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
                    project?.toDo.map((text, index) => {

                        return (
                            <li key={`toDo${index}`}>
                                <p onClick={() => { handleClick(true) }}>
                                    {index + 1}: {text}
                                </p>
                                <Button onClick={() => {
                                    return (
                                        project.inProcess.push(project.toDo[index]),
                                        project.toDo.splice(index, 1),
                                        updateProjectDB(project)
                                    )
                                }}>To Process</Button>
                                <Button onClick={() => {
                                    return (
                                        project.toDo.splice(index, 1),
                                        updateProjectDB(project)
                                    )
                                }}>Delete</Button>
                            </li>
                        )
                    })
                }
                </ul>
                <Button onClick={addTask}>+</Button>
            </div >
        )
    }

}
export default ToDo