import * as types from "./Category.constants"
import type {
  TActionFetchCategoriesSuccess,
  TActionFetchCategoriesRequest,
  TActionFetchCategoriesFail
} from "./Category.constants"
import { AbstractActionFactory } from "../../helpers/action"

export const fetchCategoriesRequested = (): TActionFetchCategoriesRequest =>
  AbstractActionFactory(types.FETCH_CATEGORIES_REQUESTED, null)

export const fetchCategoriesSuccess = (
  payload: IResponseFetchCategoriesApi
): TActionFetchCategoriesSuccess =>
  AbstractActionFactory(types.FETCH_CATEGORIES_SUCCESS, payload)

export const fetchCategoriesFailed = (
  payload: string
): TActionFetchCategoriesFail =>
  AbstractActionFactory(types.FETCH_CATEGORIES_FAIL, payload)
