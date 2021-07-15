interface ICategory {
  _id: string
  code?: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IResponseFetchCategoriesApi extends IHttpResponse {
  data: {
    categories: {
      data: ICategory[]
    }
  }
}

interface IResponseFetchCategoriesPayload extends IAction {
  payload?: IResponseFetchCategoriesApi | string | null
}
