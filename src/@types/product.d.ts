interface IProduct {
  id: string
  title: string
  description: string
  imgUrl: string
  thumbUrl: string
  quantity: number
  price: number
  provider: string
  publisher: string
  stock: number
  category: string
  author: string
}

interface IResponseGetProductApi extends IResponse {
  data: {
    products: IProduct[]
  }
}

interface IResponseGetProductPayload extends IActionCreator {
  payload: IResponseGetProductApi
}

interface IResponseGetProductItemApi extends IResponse {
  data: {
    product: IProduct
  }
}

interface IResponseGetProductItem extends IActionCreator {
  payload: IResponseGetProductItemApi
}
