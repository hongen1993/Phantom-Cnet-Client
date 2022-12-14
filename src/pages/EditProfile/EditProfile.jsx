import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import UserAPI from '../services/user.service'

const EditProfile = () => {
    const { user } = useContext(AuthContext)
    const [profile, setProfile] = useState(user)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        UserApi
            .updateUser
    })

    return (
        <>
            <Form onSubmit={''}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onChange={''}
                        type='text'
                        placeholder={profile.email}
                        name='email'
                        value={profile.email}
                    />
                </Form.Group>
            </Form>
            <Form onSubmit={''}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={''}
                        type='text'
                        placeholder={profile.name}
                        name='name'
                        value={profile.name}
                    />
                </Form.Group>
            </Form>
            <Form onSubmit={''}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={''}
                        type='text'
                        placeholder={profile.password}
                        name='name'
                        value={profile.password}
                    />
                </Form.Group>
            </Form>
            <Button variant='primary' type='submit'>
                Edit
            </Button>
        </>
    )
}

export default EditProfile