export const FETCH_CATEGORIES_REQUESTED =
  "views/category/FETCH_CATEGORIES_REQUESTED"
export const FETCH_CATEGORIES_SUCCESS =
  "views/category/FETCH_CATEGORIES_SUCCESS"
export const FETCH_CATEGORIES_FAIL = "views/category/FETCH_CATEGORIES_FAIL"

export type TActionFetchCategoriesRequest = IAction<
  typeof FETCH_CATEGORIES_REQUESTED,
  null
>
export type TActionFetchCategoriesSuccess = IAction<
  typeof FETCH_CATEGORIES_SUCCESS,
  IResponseFetchCategoriesApi
>
export type TActionFetchCategoriesFail = IAction<
  typeof FETCH_CATEGORIES_FAIL,
  string
>
