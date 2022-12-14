import ToDo from '../../components/ToDo/ToDo'
import { Col, Row, Button } from 'react-bootstrap'
import ProjectAPI from '../../services/project.service'

const ProjectWorkPlace = ({ projectData, settingProject, id }) => {

    const updateProjectDB = (project) => {
        ProjectAPI
            .updateProjectById(project._id, project)
            .then(() => {
                settingProject(id)
            })
    }

    return (
        <Row>
            <Col sm={4}>
                <h3>To Do</h3>
                <ToDo projectData={projectData} updateProjectDB={updateProjectDB} />
            </Col>
            <Col sm={4}>
                <h3>In process</h3>
                <ul>{
                    projectData?.inProcess.map((text, index) => {
                        return (
                            <li key={`inProcess${index}`}>
                                <p>{index + 1}: {text}</p>
                                <Button onClick={() => {
                                    return (
                                        projectData.done.push(projectData.inProcess[index]),
                                        projectData.inProcess.splice(index, 1),
                                        updateProjectDB(projectData)
                                    )
                                }}>Done</Button>
                                <Button onClick={() => {
                                    return (
                                        projectData.toDo.push(projectData.inProcess[index]),
                                        projectData.inProcess.splice(index, 1),
                                        updateProjectDB(projectData)
                                    )
                                }}>To Do</Button>
                            </li>
                        )
                    })
                }</ul>
            </Col>
            <Col sm={4}>
                <h3>Done</h3>
                <ul>{
                    projectData?.done.map((text, index) => {
                        return (
                            <li key={`done${index}`}>
                                <p>{index + 1}: {text}</p>
                                <Button onClick={() => {
                                    return (
                                        projectData.done.splice(index, 1),
                                        updateProjectDB(projectData)
                                    )
                                }}>Remove</Button>
                                <Button onClick={() => {
                                    return (
                                        projectData.inProcess.push(projectData.done[index]),
                                        projectData.done.splice(index, 1),
                                        updateProjectDB(projectData)
                                    )
                                }}>To Do</Button>
                            </li>
                        )
                    })
                }</ul>
            </Col >
        </Row >
    )
}

export default ProjectWorkPlace