import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"
import { rootApi } from "./root.api"

export const fetchProductListApi = (): Promise<IResponseFetchProductsApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .get(`/products`)
      .then(response =>
        resolve({
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS,
          status: HTTP_RESPONSE_STATUS.SUCCESS,
          data: {
            page: response.data.page,
            pageSize: response.data.pageSize,
            total: response.data.total,
            products: response.data.data
          }
        })
      )
      .catch(e => {
        reject(e)
      })
  })
}

export const fetchProductApi = (
  id: string
): Promise<IResponseFetchProductItemApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .get(`/products/${id}`)
      .then(response =>
        resolve({
          data: {
            product: response.data
          },
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS,
          status: HTTP_RESPONSE_STATUS.SUCCESS
        })
      )
      .catch(e => reject(e))
  })
}

export const createProductApi = (
  data: FormData
): Promise<IResponseCreateProductItemApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .post(`/products`,data)
      .then(res => resolve({
        data:{
          product:res.data,       
        },
        message: HTTP_RESPONSE_MESSAGE.SUCCESS,
        code: HTTP_RESPONSE_CODE.SUCCESS,
        status: HTTP_RESPONSE_STATUS.SUCCESS
      }))
      .catch(e => reject(e))
  })
}

export const deleteProductApi = (id : string) :Promise<IProductDelete> => {
  return new Promise((resolve,reject) => {
    rootApi.delete<IProductDelete>(`/products/${id}`)
    .then(response => {
      resolve({
        status:response.status,
        message: HTTP_RESPONSE_MESSAGE.SUCCESS,    
      })
    })
    .catch(e => reject(e))
  })
}


