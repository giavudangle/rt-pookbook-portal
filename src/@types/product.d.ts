interface IProduct {
  id?: string
  _id: string
  title: string
  price: number
  description?: string
  url: string
  thumb: string
  stocks: number
  createdAt: string
  updatedAt: string
  author: IAuthor
  category: ICategory
  provider: IProvider
  publisher: IPublisher
}

interface IResponseFetchProductsApi extends IHttpResponse {
  data: {
    products: IProduct[]
    total: number
    page: number
    pageSize: number
  }
}

interface IResponseFetchProductsPayload extends IAction {
  payload?: IResponseFetchProductsApi | string
}

interface IResponseFetchProductItemApi extends IHttpResponse {
  data: {
    product: IProduct
  }
}

interface IResponseFetchProductItemPayload extends IAction {
  payload?: IResponseFetchProductItemApi | string
}
