import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { useNavigate } from "react-router-dom"

import { Form, Button } from 'react-bootstrap'

import UserAPI from '../../services/user.service'

const ProfileEditPage = () => {
    const [userData, setUserData] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [newData, setNewData] = useState(undefined)

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        UserAPI
            .getProfile(user._id)
            .then((userDB) => {
                setUserData(userDB)
            })
            .catch((err) => {
                console.log(err.response.data.errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const updateNewUser = (event) => {
        const { name, value } = event.target;
        setNewData({ ...userData, [name]: value })
    }

    const updateUser = (event) => {
        event.preventDefault();
        UserAPI
            .updateUser(user._id, newData)
            .then(() => {
                navigate("/login")
            })
    }

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }

    return (
        <Form onSubmit={updateUser}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={updateNewUser}
                    type='text'
                    name='email'
                // value={userData.results.user.email}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    onChange={updateNewUser}
                    name='name'
                // value={userData.results.user.name}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    type='text'
                    onChange={updateNewUser}
                    name='surname'
                // value={userData.results.user.surname}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type='text'
                    onChange={updateNewUser}
                    name='image'
                // value={userData.results.user.image}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Update
            </Button>
        </Form>
    )

}

export default ProfileEditPage