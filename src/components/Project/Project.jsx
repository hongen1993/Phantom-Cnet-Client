import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap'
// import MultiForm from '../MultiForm/MultiForm';
import CreateTaskForm from '../../pages/CreateTaskForm/CreateTaskForm';

const Project = ({ user }) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        console.log(user)
        const projectsData = user.results.projects
        setProjects(projectsData)
    }, [])

    return (
        <div>
            {/* <MultiForm /> */}
            {/* <CreateTaskForm /> */}
            {
                projects.map((project) => {
                    return (
                        <div key={project._id}>
                            <Card>
                                <p>hello</p>
                                <p>Title:{project.title}</p>
                                <p>Task:{project.lists}</p>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Project
