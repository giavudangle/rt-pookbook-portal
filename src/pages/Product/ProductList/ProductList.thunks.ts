import { ThunkDispatchType } from "./../../../store/index"
import * as actions from "./ProductList.actions"
import { deleteProductApi, fetchProductListApi } from "../../../apis/product.api"

export const fetchProductList = () => async (dispatch: ThunkDispatchType) => {
  dispatch(actions.fetchProductListRequested())
  try {
    const res = await fetchProductListApi()
    return dispatch(actions.fetchProductListSuccess(res))
  } catch (err) {
    return await Promise.reject(dispatch(actions.fetchProductListFailed(err)))
  }
}


export const deleteProduct = (id : string) => async (dispatch : ThunkDispatchType) => {
  dispatch(actions.deleteProductRequested())
  try {
    await deleteProductApi(id)
    return dispatch(actions.deleteProductSuccess(id))
  } catch (err) {
    return await Promise.reject(dispatch(actions.deleteProductFailed(err)))
  }
}
