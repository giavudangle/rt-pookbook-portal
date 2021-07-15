import * as types from "./Provider.constants"
import type {
  TActionFetchProvidersFail,
  TActionFetchProvidersRequest,
  TActionFetchProvidersSuccess
} from "./Provider.constants"
import { AbstractActionFactory } from "../../helpers/action"

export const fetchProvidersRequested = (): TActionFetchProvidersRequest =>
  AbstractActionFactory(types.FETCH_PROVIDERS_REQUESTED, null)

export const fetchProvidersSuccess = (
  payload: IResponseFetchProvidersApi
): TActionFetchProvidersSuccess =>
  AbstractActionFactory(types.FETCH_PROVIDERS_SUCCESS, payload)

export const fetchProvidersFailed = (
  payload: string
): TActionFetchProvidersFail =>
  AbstractActionFactory(types.FETCH_PROVIDERS_FAIL, payload)
