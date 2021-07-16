import { AbstractActionFactory } from "../../../helpers/action"
import * as types from "./ProductItem.constants"
import {
  TActionFetchProductItemFail,
  TActionFetchProductItemSuccess,
  TActionFetchProductItemRequest,
  TActionCreateProductItemFail,
  TActionCreateProductItemRequest,
  TActionCreateProductItemSuccess
} from "./ProductItem.constants"

export const fetchProductItemRequested = (): TActionFetchProductItemRequest =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_REQUESTED, null)

export const fetchProductItemSuccess = (
  payload: IResponseFetchProductItemApi
): TActionFetchProductItemSuccess =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_SUCCESS, payload)

export const fetchProductItemFailed = (
  payload: string
): TActionFetchProductItemFail =>
  AbstractActionFactory(types.FETCH_PRODUCT_ITEM_FAILED, payload)


export const createProductItemRequested = (): TActionCreateProductItemRequest =>
  AbstractActionFactory(types.CREATE_NEW_PRODUCT_REQUESTED, null)

export const createProductItemSuccess = (
  payload: IResponseCreateProductItemApi
): TActionCreateProductItemSuccess =>
  AbstractActionFactory(types.CREATE_NEW_PRODUCT_SUCCESS, payload)

export const createProductItemFailed = (
  payload: string
): TActionCreateProductItemFail =>
  AbstractActionFactory(types.CREATE_NEW_PRODUCT_FAILED, payload)