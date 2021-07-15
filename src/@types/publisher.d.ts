interface IPublisher {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IResponseFetchPublishersApi extends IHttpResponse {
  data: {
    publishers: {
      data: IPublisher[]
    }
  }
}

interface IResponseFetchPublishersPayload extends IAction {
  payload?: IResponseFetchPublishersApi | string | null
}
