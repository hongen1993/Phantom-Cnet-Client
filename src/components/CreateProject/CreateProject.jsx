import ProjectAPI from '../../services/project.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Button } from 'react-bootstrap'
import './CreateProject.css'

const CreateProject = ({ settingProjects }) => {
    const { user } = useContext(AuthContext)

    const addProject = (event) => {
        event.preventDefault()
        ProjectAPI
            .createProject()
            .then(() => {
                settingProjects(user)
            })
    }

    return (
        <div className='create-project'>
            <span>Create new project </span>
            <Button onClick={addProject}>
                +
            </Button>
        </div>
    )
}

export default CreateProject