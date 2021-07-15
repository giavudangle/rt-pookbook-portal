interface IAuthor {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface IResponseFetchAuthorsApi extends IHttpResponse {
  data: {
    authors: {
      data: IAuthor[]
    }
  }
}

interface IResponseFetchCategoriesPayload extends IAction {
  payload?: IResponseFetchAuthorsApi | string | null
}
