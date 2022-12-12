import InitAxios from './initAxios.service';

class UserAPI extends InitAxios {
    constructor() {
        super('user')
    }

    getUsers(page) {
        return this.axios
            .get(`/all?limit=10&offset=${page}`)
            .then((response) => response.data)
            .catch((err) => console.error(err))
    }

    getUserById(id) {
        return this.axios.get(`/${id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err))
    }

    getProfile(id) {
        return this.axios.get(`/profile/${id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err))
    }

    updateUser(id, body) {
        return this.axios
            .put(`/${id}`, body)
            .then((response) => response.data)
            .catch((err) => console.error(err))
    }

    deleteUser(id) {
        return this.axios
            .delete(`/${id}`)
            .catch((err) => console.error(err))
    }

}

export default new UserAPI();