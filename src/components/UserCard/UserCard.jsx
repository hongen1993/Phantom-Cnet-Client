import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user, deleteUser }) => {
    return (
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Text>{user.name}</Card.Text>
                <Card.Title>{user.email}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button variant='link'>
                    <Link to={`/user/${user._id}`}>User Details</Link>
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => deleteUser(user._id)}>
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default UserCard
