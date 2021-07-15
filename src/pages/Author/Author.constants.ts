export const FETCH_AUTHORS_REQUESTED = "views/category/FETCH_AUTHORS_REQUESTED"
export const FETCH_AUTHORS_SUCCESS = "views/category/FETCH_AUTHORS_SUCCESS"
export const FETCH_AUTHORS_FAIL = "views/category/FETCH_AUTHORS_FAIL"

export type TActionFetchAuthorsRequest = IAction<
  typeof FETCH_AUTHORS_REQUESTED,
  null
>
export type TActionFetchAuthorsSuccess = IAction<
  typeof FETCH_AUTHORS_SUCCESS,
  IResponseFetchAuthorsApi
>
export type TActionFetchAuthorsFail = IAction<typeof FETCH_AUTHORS_FAIL, string>
