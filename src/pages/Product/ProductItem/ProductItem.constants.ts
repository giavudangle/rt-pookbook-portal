export const FETCH_PRODUCT_ITEM_REQUESTED =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_REQUESTED"
export const FETCH_PRODUCT_ITEM_SUCCESS =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_SUCCESS"
export const FETCH_PRODUCT_ITEM_FAILED =
  "views/Product/ProductItem/FETCH_PRODUCT_ITEM_FAILED"

export const CREATE_NEW_PRODUCT_REQUESTED =
  "views/Product/ProductCreate/CREATE_NEW_PRODUCT_REQUESTED"
export const CREATE_NEW_PRODUCT_SUCCESS =
  "views/Product/ProductCreate/CREATE_NEW_PRODUCT_SUCCESS"
export const CREATE_NEW_PRODUCT_FAILED =
  "views/Product/ProductCreate/CREATE_NEW_PRODUCT_FAILED"

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

export type TActionCreateProductItemRequest = IAction<
  typeof CREATE_NEW_PRODUCT_REQUESTED,
  null
>
export type TActionCreateProductItemSuccess = IAction<
  typeof CREATE_NEW_PRODUCT_SUCCESS,
  IResponseCreateProductItemApi
>
export type TActionCreateProductItemFail = IAction<
  typeof CREATE_NEW_PRODUCT_FAILED,
  string
>
