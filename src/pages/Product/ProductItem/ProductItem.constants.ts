export const FETCH_PRODUCT_ITEM_REQUESTED =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_REQUESTED"
export const FETCH_PRODUCT_ITEM_SUCCESS =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_SUCCESS"
export const FETCH_PRODUCT_ITEM_FAILED =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_FAILED"

export type TActionFetchProductItemRequest = IAction<
  typeof FETCH_PRODUCT_ITEM_REQUESTED,
  null
>
export type TActionFetchProductItemSuccess = IAction<
  typeof FETCH_PRODUCT_ITEM_SUCCESS,
  IResponseFetchProductItemApi
>
export type TActionFetchProductItemFail = IAction<
  typeof FETCH_PRODUCT_ITEM_FAILED,
  string
>
