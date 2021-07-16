import * as actions from "./ProductItem.actions"
import { fetchProductApi, createProductApi } from "../../../apis/product.api"
import { ThunkDispatchType } from "../../../store"


export const fetchProductItem =
  (id: string) => async (dispatch: ThunkDispatchType) => {
    dispatch(actions.fetchProductItemRequested())
    try {
      const res = await fetchProductApi(id)
      return dispatch(actions.fetchProductItemSuccess(res))
    } catch (err) {
      return await Promise.reject(dispatch(actions.fetchProductItemFailed(err)))
    }
  }

export const createProductItem = (form : FormData) => async (dispatch : ThunkDispatchType) => {
  dispatch(actions.createProductItemRequested())
  try {
    const res = await createProductApi(form)   
    return dispatch(actions.createProductItemSuccess(res))

  } catch (err){
    return await Promise.reject(dispatch(actions.createProductItemFailed(err)))
  }
}
