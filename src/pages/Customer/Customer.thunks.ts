import { userLoginApi } from "../../apis/user.api"
import * as actions from "./Customer.actions"

// Fix dispatch with ThunkDispatch custom in store
export const login = (payload: IRequestLogin) => dispatch => {
  dispatch(actions.loginRequested)
  return userLoginApi(payload)
    .then(response => {
      localStorage.setItem("token", response.data.access_token)
      return dispatch(actions.loginSuccess(response))
    })
    .catch(err => Promise.reject(dispatch(actions.loginFailed(err))))
}
