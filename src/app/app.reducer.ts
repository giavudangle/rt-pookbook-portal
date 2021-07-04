import * as types from "./app.constants"
import { LOGIN_SUCCESS } from "../pages/Login/Login.constants"
import produce from "immer"

const initialState = {
  isAuthenticated: false,
  closeSideBar: false
}

export const AppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT:
        localStorage.removeItem("token")
        draft.isAuthenticated = false
        break
      case LOGIN_SUCCESS:
        draft.isAuthenticated = true
        break
      case types.CLOSE_SIDE_BAR:
        draft.closeSideBar = !state.closeSideBar
        break
      default:
        return state
    }
  })
