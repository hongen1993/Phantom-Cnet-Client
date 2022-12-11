import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAPI from '../../services/user.service'
import Taskcard from '../../components/Taskcard/Taskcard'
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap';


const UserDetailsPage = () => {

    const { id } = useParams()
    const [user, setUser] = useState(undefined)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserAPI
            .getUserById(id)
            .then((userDB) => {
                setUser(userDB)
            })
            .catch((err) => {
                console.log(err.response.data.errorMessage);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h2>{user?.results.user.name}</h2>
            <p>{user?.results.user.email}</p>
            <Taskcard user={user} />
        </div>
    )
}

export default UserDetailsPage