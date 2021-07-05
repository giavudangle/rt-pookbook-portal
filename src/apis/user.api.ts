import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"

const MOCK_USER: IRequestLogin = {
  email: "vudang@gmail.com",
  password: "123"
}

const MOCK_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDdlYzVmNmUzYTVkMDA5MWZmNzgwMjUiLCJpYXQiOjE2MTg5OTkwMjUsImV4cCI6MTYxOTYwMzgyNX0.uMerTNgPq3CtMoWc3oQb3Oz4tXDCa-mAUBvCB2IADWA"

export const userLoginApi = ({
  email,
  password
}: IRequestLogin): Promise<IResponseLoginApi> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        resolve({
          data: {
            access_token: MOCK_TOKEN
          },
          status: HTTP_RESPONSE_STATUS.SUCCESS,
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS
        })
      } else {
        reject(new Error(HTTP_RESPONSE_MESSAGE.FAILED))
      }
    })
  })
}
