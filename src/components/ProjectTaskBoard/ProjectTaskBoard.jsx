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
                <ul className='project-taskboard-ul'>{
                    project?.inProcess.map((text, index) => {
                        return (
                            <li className='inprocess-li' key={`inProcess${index}`}>
                                <p>{text}</p>
                                <Button className='task-move-left' onClick={() => {
                                    project.toDo.push(project.inProcess[index])
                                    project.inProcess.splice(index, 1)
                                    updateProjectDB(project)
                                }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/null/reply-arrow.png" />
                                </Button>
                                <Button className='task-move-right' onClick={() => {
                                    project.done.push(project.inProcess[index])
                                    project.inProcess.splice(index, 1)
                                    updateProjectDB(project)
                                }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/null/forward-arrow.png" />
                                </Button>
                            </li>
                        )
                    })
                }</ul>
            </Col>
            <Col className='tasks-col-done' sm={3}>
                <ul className='project-taskboard-ul'>{
                    project?.done.map((text, index) => {
                        return (
                            <li key={`done${index}`}>
                                <Button className='delete-done' onClick={() => {
                                    project.done.splice(index, 1)
                                    updateProjectDB(project)
                                }}>✕</Button>
                                <p>{text}</p>
                                <Button className='task-move-left' onClick={() => {
                                    project.inProcess.push(project.done[index])
                                    project.done.splice(index, 1)
                                    updateProjectDB(project)
                                }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/null/reply-arrow.png" />
                                </Button>

                            </li>
                        )
                    })
                }</ul>
            </Col >
        </Row >
    )
}

export default ProjectTaskBoard