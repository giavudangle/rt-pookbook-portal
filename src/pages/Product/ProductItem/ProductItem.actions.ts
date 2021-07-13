import { AbstractActionFactory } from "../../../helpers/action"
import * as types from "./ProductItem.constants"
import {
  TActionFetchProductItemFail,
  TActionFetchProductItemSuccess,
  TActionFetchProductItemRequest
} from "./ProductItem.constants"

export const fetchProductItemRequested = (): TActionFetchProductItemRequest =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_REQUESTED, null)
// Add more type constraint here
export const fetchProductItemSuccess = (
  payload: IResponseFetchProductItemApi
): TActionFetchProductItemSuccess =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_SUCCESS, payload)

export const fetchProductItemFailed = (
  payload: string
): TActionFetchProductItemFail =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_FAILED, payload)
