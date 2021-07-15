import { fetchAuthorsApi } from "./../../apis/author.api"
import { ThunkDispatchType } from "./../../store"
import * as actions from "./Author.actions"

export const fetchAuthors = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchAuthorsRequested)
  try {
    const response = await fetchAuthorsApi()
    return dispatch(actions.fetchAuthorsSuccess(response))
  } catch (e) {
    return await Promise.reject(dispatch(actions.fetchAuthorsFailed(e)))
  }
}
