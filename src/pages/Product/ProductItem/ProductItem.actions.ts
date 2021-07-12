import * as types from "./ProductItem.constants"

export const getProductItemRequested = () => ({
  type: types.GET_PRODUCT_ITEM_REQUESTED
})
// Add more type constraint here
export const getProductItemSuccess = (
  payload: IResponseGetProductItemApi
): IResponseGetProductItem => ({
  type: types.GET_PRODUCT_ITEM_SUCCESS,
  payload
})

export const getProductItemFailed = (payload: string) => ({
  type: types.GET_PRODUCT_ITEM_FAILED,
  payload
})
