import ProjectAPI from '../../services/project.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

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
        <div>
            <span>Create new project </span>
            <button onClick={addProject}>
                +
            </button>
        </div>
    )
}

export default CreateProject