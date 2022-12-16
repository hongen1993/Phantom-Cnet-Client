import { useState, useEffect } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import './Partners.css'

import UserAPI from '../../services/user.service'
import ProjectAPI from '../../services/project.service'

const AddPartner = ({ projectData, settingProject, setProjectUsers, show, id }) => {
    const [users, setUsers] = useState(undefined)
    const [search, setSearch] = useState('')

    const searchPartners = () => {
        UserAPI
            .getUsers()
            .then((usersDB) => {
                setUsers(usersDB)
            })
    }

    const _updateNewProject = (project) => {
        const _projectData = JSON.parse(JSON.stringify(project))
        ProjectAPI
            .updateProjectById(_projectData._id, _projectData)
            .then(() => {
                settingProject(id)
                searchPartners()
                setProjectUsers()
            })
    }

    useEffect(() => {
        searchPartners()
    }, [])

    if (show === true) {
        return (
            <>
                <Form>
                    <InputGroup>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                    </InputGroup>
                </Form>
                <ul className='user-search-dropdown'>
                    {
                        users?.results.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.email.toLowerCase().includes(search)
                        }).map((userDB) => {
                            if (!projectData.user.includes(userDB._id)) {
                                return (
                                    <li onClick={() => {
                                        projectData.user.push(userDB._id)
                                        _updateNewProject(projectData)
                                    }
                                    } key={userDB._id} >
                                        <p>{userDB.email}</p>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}

export default AddPartner