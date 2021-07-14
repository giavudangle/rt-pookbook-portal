import * as actions from "./ProductItem.actions"
import { fetchProductApi, fetchProductListApi } from "../../../apis/product.api"
import { ThunkDispatchType } from "../../../store"

export const fetchProductItem =
  (id: string) => async (dispatch: ThunkDispatchType) => {
    dispatch(actions.fetchProductItemRequested())
    try {
      const res = await fetchProductApi(id)
      console.log(res)

      return dispatch(actions.fetchProductItemSuccess(res))
    } catch (err) {
      return await Promise.reject(dispatch(actions.fetchProductItemFailed(err)))
    }
  }
