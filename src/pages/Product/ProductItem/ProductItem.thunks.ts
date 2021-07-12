import * as actions from "./ProductItem.actions"
import { getProductApi } from "../../../apis/product.api"
import { ThunkDispatchType } from "../../../store"

export const getProductItem = (id: string) => (dispatch: ThunkDispatchType) => {
  dispatch(actions.getProductItemRequested())
  return getProductApi(id)
    .then(res => dispatch(actions.getProductItemSuccess(res)))
    .catch(err => Promise.reject(dispatch(actions.getProductItemFailed(err))))
}
