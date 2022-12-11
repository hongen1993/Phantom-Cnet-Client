import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap'
// import MultiForm from '../MultiForm/MultiForm';
import CreateTaskForm from '../../pages/CreateTaskForm/CreateTaskForm';

const Taskcard = ({ user }) => {
    const [taskcards, setTaskcards] = useState([])

    useEffect(() => {
        const taskcardsArr = user.results.taskcards
        setTaskcards(taskcardsArr)
    }, [])

    return (
        <div>
            {/* <MultiForm /> */}
            {/* <CreateTaskForm /> */}
            {
                taskcards.map((taskcard) => {
                    return (
                        <div key={taskcard._id}>
                            <Card>
                                <p>hello</p>
                                <p>Title:{taskcard.title}</p>
                                <p>Task:{taskcard.tasks}</p>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Taskcard
