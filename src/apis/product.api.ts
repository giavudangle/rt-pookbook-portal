import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"
import { rootApi } from "./root.api"

// Dispatch
// Thunk start
// Thunk call to api layer
// Api layer return data get from api
// -> Action start
// -> Reducer reduce state

export const getProductListApi = (): Promise<IResponseGetProductApi> => {
  return new Promise((resolve, reject) => {
    rootApi.get(`/products`)
      .then(response => resolve({
        data: {
          products: response.data
        },
        message: HTTP_RESPONSE_MESSAGE.SUCCESS,
        code: HTTP_RESPONSE_CODE.SUCCESS,
        status: HTTP_RESPONSE_STATUS.SUCCESS
      }))
  })
}

export const getProductApi = (
  id: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    })
  })
}
