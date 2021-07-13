interface ICategory {
  _id: string
  id?: string
  code?: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IResponseGetCategoriesApi extends IHttpResponse {
  data: {
    categories: ICategory[]
  }
}

interface IResponseGetCategoriesPayload extends IAction {
  payload?: IResponseGetCategoriesApi | string | null
}
