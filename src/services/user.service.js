import InitAxios from './initAxios.service';

class UserService extends InitAxios {
    constructor() {
        super('user')
    }

    profile = (token) => {
        return this.axios
            .get('/profile', {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.data)
            .catch((err) => console.log(err))
    }

}

export default new UserService();