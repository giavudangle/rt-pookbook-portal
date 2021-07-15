import {
  HTTP_RESPONSE_CODE,
  HTTP_RESPONSE_MESSAGE,
  HTTP_RESPONSE_STATUS
} from "../constants/http"
import { rootApi } from "./root.api"

export const fetchPublishersApi = (): Promise<IResponseFetchPublishersApi> => {
  return new Promise((resolve, reject) => {
    rootApi
      .get(`/publishers`)
      .then(response =>
        resolve({
          data: {
            publishers: response.data
          },
          message: HTTP_RESPONSE_MESSAGE.SUCCESS,
          status: HTTP_RESPONSE_STATUS.SUCCESS,
          code: HTTP_RESPONSE_CODE.SUCCESS
        })
      )
      .catch(e => reject(e))
  })
}
