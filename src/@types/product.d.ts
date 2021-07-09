interface IProduct {
  id: string,
  _id: string,
  title: string,
  price: number,
  description: string,
  url: string,
  thumb: string,
  stocks: number,
  createdAt: string,
  updatedAt: string,
  author: IAuthor['name'] ,
  category: ICategory['name'],
  provider: IProvider['name'],
  publisher: IPublisher['name'],
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
