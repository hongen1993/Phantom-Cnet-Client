import InitAxios from './initAxios.service';

class projectAPI extends InitAxios {
    constructor() {
        super('user')
    }

    createProject(token, body) {
        return this.axios
            .get('/me',
                {
                    headers: { 'authorization': `Bearer ${token}` }
                })
            .post(`/newProject`, body)
            .then((response) => response.data)
    }
}

export default new projectAPI();
