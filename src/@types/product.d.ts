interface IProduct {
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

interface IProductFlatten extends IProduct {
  author: string
  category: string
  provider: string
  publisher: string
}

interface IProductItemCreate {
  title: string
  price: number
  description?: string
  stocks: number
  authorId: string
  categoryId: string
  providerId: string
  publisherId: string
}

interface IProductDelete extends IHttpResponse {

}

interface IResponseCreateProductItemApi extends IHttpResponse {
  data: {
    product: IProduct
  }
}

interface IResponseFetchProductsApi extends IHttpResponse {
  data: {
    products: IProduct[]
    total: number
    page: number
    pageSize: number
  }
}

interface IResponseFetchProductItemApi extends IHttpResponse {
  data: {
    product: IProduct
  }
}

/**
 * PAYLOAD INTERFACES
 */

interface IResponseFetchProductsPayload extends IAction {
  payload?: IResponseFetchProductsApi | string
}

interface IResponseFetchProductItemPayload extends IAction {
  payload?: IResponseFetchProductItemApi | string
}

interface IResponseCreateProductItemPayload extends IAction {
  payload?: IResponseCreateProductItemApi | string
}
