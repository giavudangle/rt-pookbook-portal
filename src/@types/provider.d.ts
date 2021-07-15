interface IProvider {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IResponseFetchProvidersApi extends IHttpResponse {
  data: {
    providers: {
      data: IProvider[]
    }
  }
}

interface IResponseFetchCategoriesPayload extends IAction {
  payload?: IResponseFetchProvidersApi | string | null
}
