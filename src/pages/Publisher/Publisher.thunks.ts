import { fetchPublishersApi } from "../../apis/publisher.api"
import { ThunkDispatchType } from "../../store"
import * as actions from "./Publisher.actions"

export const fetchPublishers = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchPublishersRequested)
  try {
    const response = await fetchPublishersApi()
    return dispatch(actions.fetchPublishersSuccess(response))
  } catch (e) {
    return await Promise.reject(dispatch(actions.fetchPublishersFailed(e)))
  }
}
