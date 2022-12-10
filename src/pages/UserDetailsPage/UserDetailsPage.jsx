import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserAPI from '../../services/user.service'
import Taskcard from '../../components/Taskcard/Taskcard'


const UserDetailsPage = () => {

    const { id } = useParams()
    const [user, setUser] = useState(undefined)
    console.log(user)
    useEffect(() => {
        UserAPI
            .getUserById(id)
            .then((user) => {
                setUser(user)
            })
            .catch((err) => {
                console.log(err.response.data.errorMessage);
            })
    }, [])

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Taskcard user={user} />
        </div>
    )
}

export default UserDetailsPage