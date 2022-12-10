import InitAxios from './initAxios.service';

class UserAPI extends InitAxios {
    constructor() {
        super('user')
    }

    me(token) {
        return this.axios
            .get('/me',
                { headers: { 'authorization': `Bearer ${token}` } }
            )
            .then((response) => response.data)
            .catch((err) => console.err(err))
    }

    getUsers(page) {
        return this.axios
            .get(`/all?limit=10&offset=${page}`)
            .then((response) => response.data)
            .catch((err) => console.err(err))
    }

    getUserById(id) {
        return this.axios.get(`/${id}`)
            .then((response) => response.data)
            .catch((err) => console.err(err))
    }

    updateUser(id, body) {
        return this.axios
            .put(`/${id}`, body)
            .then((response) => response.data)
            .catch((err) => console.err(err))
    }

    deleteUser(id) {
        return this.axios
            .delete(`/${id}`)
            .catch((err) => console.err(err))
    }

}

export default new UserAPI();