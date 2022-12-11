import TaskcardAPI from '../../services/taskcard.service'

const CreateTaskForm = () => {

    const createTaskcard = () => {
        TaskcardAPI
            .createTaskcard({ title: 'hello', task: 'ok', id: '1234' })
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
export default CreateTaskForm