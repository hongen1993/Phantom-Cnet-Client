import ToDo from '../ToDo/ToDo'
import { Col, Row, Button } from 'react-bootstrap'
import { useState } from 'react'

import './ProjectTaskBoard.css'

const ProjectTaskBoard = ({ projectData, updateProjectDB }) => {
    const [project, setProject] = useState(projectData)

    return (
        <Row>
            <Col className='tasks-col-todo' sm={3}>
                <ToDo project={project} setProject={setProject} updateProjectDB={updateProjectDB} />
            </Col>
            <Col className='tasks-col-inprocess' sm={3}>
                <ul>{
                    project?.inProcess.map((text, index) => {
                        return (
                            <li key={`inProcess${index}`}>
                                <p>{index + 1}: {text}</p>
                                <Button onClick={() => {
                                    project.toDo.push(project.inProcess[index])
                                    project.inProcess.splice(index, 1)
                                    updateProjectDB(project)
                                }}>To Do</Button>
                                <Button onClick={() => {
                                    project.done.push(project.inProcess[index])
                                    project.inProcess.splice(index, 1)
                                    updateProjectDB(project)
                                }}>Done</Button>
                            </li>
                        )
                    })
                }</ul>
            </Col>
            <Col className='tasks-col-done' sm={3}>
                <ul>{
                    project?.done.map((text, index) => {
                        return (
                            <li key={`done${index}`}>
                                <p>{index + 1}: {text}</p>
                                <Button onClick={() => {
                                    project.inProcess.push(project.done[index])
                                    project.done.splice(index, 1)
                                    updateProjectDB(project)
                                }}>To Do</Button>
                                <Button onClick={() => {
                                    project.done.splice(index, 1)
                                    updateProjectDB(project)
                                }}>Remove</Button>
                            </li>
                        )
                    })
                }</ul>
            </Col >
        </Row >
    )
}

export default ProjectTaskBoard