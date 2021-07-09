import * as actions from "./ProductList.actions"
import { getProductListApi } from "../../../apis/product.api"

export const getProductList = () => dispatch => {
  dispatch(actions.getProductListRequested())
  return getProductListApi()
    .then(res => dispatch(actions.getProductListSuccess(res.data.products)))
    .catch(err => Promise.reject(dispatch(actions.getProductListFailed(err))))
}
