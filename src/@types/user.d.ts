interface IRequestLogin {
  email: string
  password: string
}
interface IResponseLoginApi extends IHttpResponse {
  data: {
    access_token: string
  }
}

interface IResponseLogin extends IAction {}
