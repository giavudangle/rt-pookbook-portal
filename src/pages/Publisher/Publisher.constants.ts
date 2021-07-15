export const FETCH_PUBLISHERS_REQUESTED =
  "views/category/FETCH_PUBLISHERS_REQUESTED"
export const FETCH_PUBLISHERS_SUCCESS =
  "views/category/FETCH_PUBLISHERS_SUCCESS"
export const FETCH_PUBLISHERS_FAIL = "views/category/FETCH_PUBLISHERS_FAIL"

export type TActionFetchPublishersRequest = IAction<
  typeof FETCH_PUBLISHERS_REQUESTED,
  null
>
export type TActionFetchPublishersSuccess = IAction<
  typeof FETCH_PUBLISHERS_SUCCESS,
  IResponseFetchPublishersApi
>
export type TActionFetchPublishersFail = IAction<
  typeof FETCH_PUBLISHERS_FAIL,
  string
>
