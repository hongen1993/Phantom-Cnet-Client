import { useState } from 'react'
import { Button, Card, ListGroup, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({ user, showLink, deleteUser }) => {

    return (
        <Card>
            <Card.Img
                variant='top'
                src={''}
                alt={''}
            />
            <Card.Body>
                <Card.Title>Name</Card.Title>
                <Card.Text>Surname</Card.Text>
                <Card.Text>Email</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default UserCard