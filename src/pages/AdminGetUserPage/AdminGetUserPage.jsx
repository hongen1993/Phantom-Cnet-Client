import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import UserAPI from '../../services/user.service'

const UserDetailsPage = () => {

    const { id } = useParams()
    const [userDB, setUserDB] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        UserAPI
            .getUserById(id)
            .then((userData) => {
                setUserDB(userData)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div>
                <h2>{userDB.results.user.name}</h2>
                <p>{userDB.results.user.email}</p>
                <Link to={`/profile/edit/${userDB.results.user._id}`}>Edit Profile</Link>
            </div>
        </div>
    )
}

export default UserDetailsPage