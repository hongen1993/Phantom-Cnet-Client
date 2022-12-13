import { Row, Col } from 'react-bootstrap'
import ToDo from '../../components/ToDo/ToDo'

const ProjectWorkPlace = ({ projectData }) => {

    const randomKey = Math.floor(Math.random() * Math.pow(10, 20))

    return (
        <Row>
            <Col sm={4}>
                <h3>To Do</h3>
                <ToDo projectData={projectData} />
            </Col>
            <Col sm={4}>
                <h3>In process</h3>
                {
                    projectData?.inProcess.map((task) => {
                        return (
                            <div key={randomKey}>
                                <p>{task}</p>
                            </div>
                        )
                    })
                }
            </Col>
            <Col sm={4}>
                <h3>Done</h3>
                {
                    projectData?.done.map((task) => {
                        return (
                            <div key={randomKey}>
                                <p>{task}</p>
                            </div>
                        )
                    })
                }
            </Col >
        </Row >
    )
}

export default ProjectWorkPlace