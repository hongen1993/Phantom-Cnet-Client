import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL + `/${path}`
        })
        // Automatically set JWT token on the request headers for every request
        this.axios.interceptors.request.use((config) => {
            // Retrieve the JWT token from the local storage
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
}

export default InitAxios