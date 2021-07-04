import { HTTP_RESPONSE_CODE, HTTP_RESPONSE_MESSAGE, HTTP_RESPONSE_STATUS } from "src/constants/http"

const mockData: IProduct[] = [
  {
    id: "test",
    title: "test",
    description: "test",
    imgUrl: "test",
    thumbUrl: "test",
    quantity: 1,
    price: 1,
    provider: "test",
    publisher: "test",
    stock: 1,
    category: "test",
    author: "test"
  }
]

export const getProductList = (): Promise<IResponseGetProductApi> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          products: mockData
        },
        message: "Ok",
        code: 200,
        status: "Ok"
      })
    }, 1000)
    if (!resolve) reject()
  })
}


export const getProduct = (id : string) : Promise<IResponseGetProductItemApi> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const product = mockData.find(p => p.id === id)
      if(product){
        resolve({
          data:{
            product
          },
          message:HTTP_RESPONSE_MESSAGE.SUCCESS,
          code:HTTP_RESPONSE_CODE.SUCCESS,
          status:HTTP_RESPONSE_STATUS.SUCCESS
        })
      } else {
        reject(new Error(HTTP_RESPONSE_MESSAGE.FAILED))
      }
    })
  })
}
