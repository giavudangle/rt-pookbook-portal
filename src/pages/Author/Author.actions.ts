import * as types from "./Author.constants"
import type {
  TActionFetchAuthorsFail,
  TActionFetchAuthorsRequest,
  TActionFetchAuthorsSuccess
} from "./Author.constants"
import { AbstractActionFactory } from "../../helpers/action"

export const fetchAuthorsRequested = (): TActionFetchAuthorsRequest =>
  AbstractActionFactory(types.FETCH_AUTHORS_REQUESTED, null)

export const fetchAuthorsSuccess = (
  payload: IResponseFetchAuthorsApi
): TActionFetchAuthorsSuccess =>
  AbstractActionFactory(types.FETCH_AUTHORS_SUCCESS, payload)

export const fetchAuthorsFailed = (payload: string): TActionFetchAuthorsFail =>
  AbstractActionFactory(types.FETCH_AUTHORS_FAIL, payload)
