import InitAxios from './initAxios.service';

class ProjectAPI extends InitAxios {
    constructor() {
        super('user')
    }

    getProjectById(id) {
        return this.axios
            .get(`/project/${id}`)
            .then((response) => response.data)
    }

    createProject(body) {
        return this.axios
            .post('/newProject', body)
            .then((response) => response.data)
    }

    updateProjectById(id, body) {
        return this.axios
            .put(`/editProject/${id}`, body)
            .then((response) => response.data)
    }

    deleteProjectById(id) {
        return this.axios
            .delete(`/project/${id}`)
            .then((response) => response.data);
    }
}

export default new ProjectAPI();