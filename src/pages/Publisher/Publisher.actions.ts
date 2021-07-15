import * as types from "./Publisher.constants"
import type {
  TActionFetchPublishersFail,
  TActionFetchPublishersRequest,
  TActionFetchPublishersSuccess
} from "./Publisher.constants"
import { AbstractActionFactory } from "../../helpers/action"

export const fetchPublishersRequested = (): TActionFetchPublishersRequest =>
  AbstractActionFactory(types.FETCH_PUBLISHERS_REQUESTED, null)

export const fetchPublishersSuccess = (
  payload: IResponseFetchPublishersApi
): TActionFetchPublishersSuccess =>
  AbstractActionFactory(types.FETCH_PUBLISHERS_SUCCESS, payload)

export const fetchPublishersFailed = (
  payload: string
): TActionFetchPublishersFail =>
  AbstractActionFactory(types.FETCH_PUBLISHERS_FAIL, payload)
