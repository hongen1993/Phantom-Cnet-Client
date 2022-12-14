import InitAxios from './initAxios.service'

class AuthService extends InitAxios {
  constructor() {
    super('auth')
  }

  login = (requestBody) => {
    return this.axios.post("/login", requestBody)
  }

  signup = (requestBody) => {
    return this.axios.post("/signup", requestBody)
  }

  verify = (token) => {
    return this.axios.get("/verify", { headers: { 'authorization': `Bearer ${token}` } })
  }
}

export default new AuthService()