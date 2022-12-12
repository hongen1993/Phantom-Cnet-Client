import ProjectAPI from '../../services/project.service'

const TaskFormPage = () => {

    const createProject = () => {
        ProjectAPI
            .createProject({ title: 'hello', lists: 'ok' })
            .then(() => {
                console.log('Create')
            })
    }

    return (
        <>
            <div>
                <h1>Create</h1>
                <div onClick={createProject}>
                    click here</div>
            </div>
        </>
    )
}
export default TaskFormPage