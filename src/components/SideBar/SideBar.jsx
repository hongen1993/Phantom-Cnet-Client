import './SideBar.css'
import { Link } from "react-router-dom"

import { useState, useEffect } from 'react'

import { MdAccountCircle } from 'react-icons/md'
import { RiCloseCircleLine } from 'react-icons/ri'

import UserAPI from '../../services/user.service'

const SideBar = ({ user }) => {
    const [sideBar, setSideBar] = useState(false)
    const [userData, setUserData] = useState(undefined)
    const [loading, setLoading] = useState(true)

    const showSideBar = () => setSideBar(!sideBar)

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
    }, [sideBar])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }

    const userInfo = userData.results
    return (
        <>
            <MdAccountCircle size={30} onClick={showSideBar} />
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <h4> Profile </h4>
                <img src={userInfo.user.image}></img>
                <ul className="nav-menu-items">
                    <li className='user-name'>
                        <p>{userInfo.user.name}</p>
                    </li>
                    <li className='user-surname'>
                        <p>{userInfo.user.surname}</p>
                    </li>
                    <li className='user-email'>
                        <p>{userInfo.user.email}</p>
                    </li>
                    <li className='created-projects'>
                        <Link to='/projects'>
                            My projects ({userInfo.projects.length})
                        </Link>
                    </li>
                    <li className='last-project'>
                        <p>Last project created :</p>
                        {
                            userInfo.projects.length > 0 ?
                                < Link className='last-project-link' to={`/project/${userInfo.projects[userInfo.projects.length - 1]?._id}`}>
                                    {userInfo.projects[userInfo.projects.length - 1]?.title}
                                </Link>
                                :
                                <Link className='empty-projects' to='/projects'>Create new</Link>
                        }
                    </li>
                    <li className='edit-profile'>
                        <Link to={`/profile/edit/${userInfo.user._id}`}>
                            Edit Profile
                        </Link>
                    </li>
                </ul>
                <div className="close-button">
                    <RiCloseCircleLine size={40} onClick={showSideBar} />
                </div>
            </nav>
        </>
    )
}

export default SideBar