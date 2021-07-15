import { fetchProvidersApi } from "../../apis/provider.api"
import { ThunkDispatchType } from "../../store"
import * as actions from "./Provider.actions"

export const fetchProviders = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchProvidersRequested)
  try {
    const response = await fetchProvidersApi()
    return dispatch(actions.fetchProvidersSuccess(response))
  } catch (e) {
    return await Promise.reject(dispatch(actions.fetchProvidersFailed(e)))
  }
}
