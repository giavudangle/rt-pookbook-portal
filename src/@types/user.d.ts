interface IRequestLogin {
    email: string
    password: string
}
interface IResponseLoginApi extends IResponse {
    data: {
        access_token: string
    }
}

interface IResponseLogin extends IActionCreator { 

}