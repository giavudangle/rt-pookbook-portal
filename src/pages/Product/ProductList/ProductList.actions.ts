import { AbstractActionFactory } from "../../../helpers/action"
import * as types from "./ProductList.constants"
import {
  TActionFetchProductsRequest,
  TActionFetchProductsSuccess,
  TActionFetchProductsFail
} from "./ProductList.constants"

export const fetchProductListRequested = (): TActionFetchProductsRequest =>
  AbstractActionFactory(types.FETCH_PRODUCT_LIST_REQUESTED, null)
export const fetchProductListSuccess = (
  payload: IResponseFetchProductsApi
): TActionFetchProductsSuccess =>
  AbstractActionFactory(types.FETCH_PRODUCT_LIST_SUCCESS, payload)

export const fetchProductListFailed = (
  payload: string
): TActionFetchProductsFail =>
  AbstractActionFactory(types.FETCH_PRODUCT_LIST_FAILED, payload)
