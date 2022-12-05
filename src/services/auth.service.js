import InitAxios from './initAxios.service';

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

  verify = () => {
    return this.axios.get("/verify")
  }
}

export default new AuthService()