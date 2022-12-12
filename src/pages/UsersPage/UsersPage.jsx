import { useContext, useEffect, useState } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'

import UserAPI from '../../services/user.service'
import UserCard from '../../components/UserCard/UserCard'

import "./UsersPage.css"

const UserPage = () => {
    const { user } = useContext(AuthContext)
    const ownId = user._id

    const [users, setUsers] = useState([])
    const [pagination, setPagination] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    const reloadUsers = (pagination) => {
        UserAPI
            .getUsers(pagination)
            .then((usersDB) => {
                setUsers(usersDB.results)
                setMaxPage(usersDB.maxPage)
            })
    }

    useEffect(() => {
        UserAPI
            .getUsers()
            .then((usersDB) => {
                setUsers(usersDB.results)
                setMaxPage(users.maxPage)
            })
    }, [pagination])

    const deleteUser = (id) => {
        UserAPI
            .deleteUser(id)
            .then(() => {
                reloadUsers(pagination)
            })
    }

    return (
        <div >
            <Container>
                <Row xs={1} md={3} className='g-4'>
                    {
                        users.map((user) => {
                            if (ownId === user._id) {
                            } else {
                                return (
                                    <Col key={user._id}>
                                        <UserCard
                                            user={user}
                                            deleteUser={deleteUser}
                                        />
                                    </Col>
                                )
                            }
                        })
                    }
                </Row>
                <Row>
                    <Pagination>
                        <Pagination.First as='span' onClick={() => setPagination(0)} />
                        <Pagination.Prev
                            as='span'
                            onClick={() =>
                                setPagination((currentPage) => currentPage - 1)
                            }
                        />
                        <Pagination.Next
                            as='span'
                            onClick={() =>
                                setPagination((currentPage) => currentPage + 1)
                            }
                        />
                        <Pagination.Last as='span' onClick={() => setPagination(maxPage)} />
                    </Pagination>
                </Row>
            </Container>
        </div >
    )
}

export default UserPage
