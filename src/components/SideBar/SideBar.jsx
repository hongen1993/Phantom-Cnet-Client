import './SideBar.css'
import { Link } from "react-router-dom"

import { useState, useEffect } from 'react'

import { MdAccountCircle } from 'react-icons/md'
import { RiCloseCircleLine } from 'react-icons/ri'

import UserAPI from '../../services/user.service'

const SideBar = ({ user }) => {
    const [sideBar, setSideBar] = useState(false)
    const [userData, setUserData] = useState(undefined)
    const [loading, setLoading] = useState(true);

    const showSideBar = () => setSideBar(!sideBar)

    useEffect(() => {
        UserAPI
            .getProfile(user._id)
            .then((userDB) => {
                setUserData(userDB)
            })
            .catch((err) => {
                console.log(err.response.data.errorMessage);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>;
    }

    const userInfo = userData.results

    return (
        <>
            <MdAccountCircle size={30} onClick={showSideBar} />
            <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <div>
                    <RiCloseCircleLine size={30} onClick={showSideBar} />
                </div>
                <h4>Profile</h4>
                <ul className="nav-menu-items">
                    <img src></img>
                    <li>
                        <p>{
                            userInfo.user.name
                        }</p>
                    </li>
                    <li>
                        <p>{userInfo.user.email}</p>
                    </li>
                    <li>
                        <Link to='/profile'>
                            Created projects: {userInfo.projects.length}
                        </Link>
                    </li>
                    <li>
                        <p>Last project created :</p>
                        <Link to='/'>
                            {userInfo.projects[userInfo.projects.length - 1].title}
                        </Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar