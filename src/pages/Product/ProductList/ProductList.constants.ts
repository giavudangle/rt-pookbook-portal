export const FETCH_PRODUCT_LIST_REQUESTED =
  "views/ProductList/FETCH_PRODUCT_LIST_REQUESTED"
export const FETCH_PRODUCT_LIST_SUCCESS =
  "views/ProductList/FETCH_PRODUCT_LIST_SUCCESS"
export const FETCH_PRODUCT_LIST_FAILED =
  "views/ProductList/FETCH_PRODUCT_LIST_FAILED"

export type TActionFetchProductsRequest = IAction<
  typeof FETCH_PRODUCT_LIST_REQUESTED,
  null
>
export type TActionFetchProductsSuccess = IAction<
  typeof FETCH_PRODUCT_LIST_SUCCESS,
  IResponseFetchProductsApi
>
export type TActionFetchProductsFail = IAction<
  typeof FETCH_PRODUCT_LIST_FAILED,
  string
>
