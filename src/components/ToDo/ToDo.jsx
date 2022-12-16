import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './ToDo.css'

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
            <div className='todo-form-card'>
                <Form
                    className='todo-form'
                    onSubmit={_updateProject}>
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
            </div>
        )
    } else {
        return (
            <div>
                <ul className='project-taskboard-ul'>{
                    project?.toDo.map((text, index) => {

                        return (
                            <li className='todo-li' key={`toDo${index}`}>
                                <Button className='delete-todo' onClick={() => {
                                    return (
                                        project.toDo.splice(index, 1),
                                        updateProjectDB(project)
                                    )
                                }}>✕</Button>
                                <p onClick={() => { handleClick(true) }}>
                                    {text}
                                </p>
                                <Button className='task-move-right task-move-right-inprocess' onClick={() => {
                                    return (
                                        project.inProcess.push(project.toDo[index]),
                                        project.toDo.splice(index, 1),
                                        updateProjectDB(project)
                                    )
                                }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/null/forward-arrow.png" />
                                </Button>
                            </li>
                        )
                    })
                }
                </ul>
                <Button className='todo-add-button' onClick={addTask}>+</Button>
            </div >
        )
    }
}
export default ToDo