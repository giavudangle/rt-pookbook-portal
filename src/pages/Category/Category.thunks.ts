import { fetchCategoriesApi } from "./../../apis/category.api"
import { ThunkDispatchType } from "./../../store"
import * as actions from "./Category.actions"

export const fetchCategories = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchCategoriesRequested)
  try {
    const response = await fetchCategoriesApi()
    return dispatch(actions.fetchCategoriesSuccess(response))
  } catch (e) {
    return await Promise.reject(dispatch(actions.fetchCategoriesFailed(e)))
  }
}
