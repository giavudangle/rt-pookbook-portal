import { ThunkDispatchType } from "./../../../store/index"
import * as actions from "./ProductList.actions"
import { fetchProductListApi } from "../../../apis/product.api"

export const fetchProductList = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchProductListRequested())
  try {
    const res = await fetchProductListApi()
    return dispatch(actions.fetchProductListSuccess(res))
  } catch (err) {
    return await Promise.reject(dispatch(actions.fetchProductListFailed(err)))
  }
}
