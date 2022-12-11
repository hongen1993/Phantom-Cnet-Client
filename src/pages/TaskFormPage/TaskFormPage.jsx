import TaskcardAPI from '../../services/taskcard.service'

const TaskFormPage = () => {

    const createTaskcard = () => {
        TaskcardAPI
            .createTaskcard({ title: 'hello', task: 'ok' })
            .then(() => {
                console.log('Create')
            })
    }

    return (
        <>
            <div>
                <h1>Create</h1>
                <div onClick={createTaskcard}>
                    click here</div>
            </div>
        </>
    )
}
export default TaskFormPage