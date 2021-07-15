export const FETCH_PROVIDERS_REQUESTED =
  "views/category/FETCH_PROVIDERS_REQUESTED"
export const FETCH_PROVIDERS_SUCCESS = "views/category/FETCH_PROVIDERS_SUCCESS"
export const FETCH_PROVIDERS_FAIL = "views/category/FETCH_PROVIDERS_FAIL"

export type TActionFetchProvidersRequest = IAction<
  typeof FETCH_PROVIDERS_REQUESTED,
  null
>
export type TActionFetchProvidersSuccess = IAction<
  typeof FETCH_PROVIDERS_SUCCESS,
  IResponseFetchProvidersApi
>
export type TActionFetchProvidersFail = IAction<
  typeof FETCH_PROVIDERS_FAIL,
  string
>
