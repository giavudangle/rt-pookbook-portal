import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"
import { rootApi } from "./root.api"

export const fetchAuthorsApi = (): Promise<IResponseFetchAuthorsApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .get(`/authors`)
      .then(response =>
        resolve({
          data: {
            authors: response.data
          },
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          status: HTTP_RESPONSE_STATUS.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS
        })
      )
      .catch(e => reject(e))
  })
}
