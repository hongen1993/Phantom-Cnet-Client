import { Button, Card, ListGroup, Modal } from 'react-bootstrap'

const Taskcard = ({ user, showLink, deleteUser }) => {
    {
        user?.results.taskcards.map((taskcard) => {
            return (
                <Card>
                    <div key={taskcard.id}>
                        <p>Title:{taskcard.title}</p>
                        <p>Task:{taskcard.tasks}</p>
                    </div>
                </Card>
            )
        })
    }
}
export default Taskcard
