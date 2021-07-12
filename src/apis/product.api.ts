import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"
import { rootApi } from "./root.api"

export const getProductListApi = (): Promise<IResponseGetProductApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .get(`/products`)
      .then(response =>
        resolve({
          data: {
            products: response.data
          },
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS,
          status: HTTP_RESPONSE_STATUS.SUCCESS
        })
      )
      .catch(e => {
        reject(e)
      })
  })
}

export const getProductApi = (
  id: string
): Promise<IResponseGetProductItemApi> => {
  return new Promise((resolve, reject) => {
    rootApi.get(`/products/${id}`).then(response =>
      resolve({
        data: {
          product: response.data
        },
        message: HTTP_RESPONSE_MESSAGE.SUCCESS,
        code: HTTP_RESPONSE_CODE.SUCCESS,
        status: HTTP_RESPONSE_STATUS.SUCCESS
      })
    )
  })
}
