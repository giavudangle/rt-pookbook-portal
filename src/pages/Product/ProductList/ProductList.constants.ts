export const FETCH_PRODUCT_LIST_REQUESTED =
  "views/ProductList/FETCH_PRODUCT_LIST_REQUESTED"
export const FETCH_PRODUCT_LIST_SUCCESS =
  "views/ProductList/FETCH_PRODUCT_LIST_SUCCESS"
export const FETCH_PRODUCT_LIST_FAILED =
  "views/ProductList/FETCH_PRODUCT_LIST_FAILED"

export const DELETE_PRODUCT_REQUESTED =
  "views/ProductList/DELETE_PRODUCT_REQUESTED"
export const DELETE_PRODUCT_SUCCESS =
  "views/ProductList/DELETE_PRODUCT_SUCCESS"
export const DELETE_PRODUCT_FAILED =
  "views/ProductList/DELETE_PRODUCT_FAILED"

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

export type TActionDeleteProductsRequest = IAction<
  typeof DELETE_PRODUCT_REQUESTED,
  null
>
export type TActionDeleteProductsSuccess = IAction<
  typeof DELETE_PRODUCT_SUCCESS,
  string
>
export type TActionDeleteProductsFail = IAction<
  typeof DELETE_PRODUCT_FAILED,
  string
>
