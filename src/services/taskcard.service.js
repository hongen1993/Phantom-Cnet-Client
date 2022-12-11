import InitAxios from './initAxios.service';

class TaskcardAPI extends InitAxios {
    constructor() {
        super('user')
    }

    createTaskcard(token, body) {
        return this.axios
            .get('/me',
                {
                    headers: { 'authorization': `Bearer ${token}` }
                })
            .post(`/newTaskcard`, body)
            .then((response) => response.data)
    }
}

export default new TaskcardAPI();
