import * as actions from "./ProductItem.actions"
import { getProduct } from "src/apis/product.api"

export const getProductItem = (id: string) => dispatch => {
  dispatch(actions.getProductItemRequested())
  return getProduct(id)
    .then(res => dispatch(actions.getProductItemSuccess(res.data)))
    .catch(err => Promise.reject(dispatch(actions.getProductItemFailed(err))))
}