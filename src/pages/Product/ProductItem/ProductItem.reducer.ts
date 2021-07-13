import { AnyAction } from "redux"
import * as types from "./ProductItem.constants"
import produce from "immer"

interface IProductItemState {
  loading: boolean
  productItem?: IProduct | null
}

const initialState: IProductItemState = {
  loading: false,
  productItem: null
}

type TActions =
  | types.TActionFetchProductItemFail
  | types.TActionFetchProductItemRequest
  | types.TActionFetchProductItemSuccess

export const ProductItemReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_PRODUCT_ITEM_REQUESTED:
        draft.loading = true
        draft.productItem = null
        break
      case types.FETCH_PRODUCT_ITEM_SUCCESS:
        draft.loading = false
        draft.productItem = action.payload?.data.product
        break
      case types.FETCH_PRODUCT_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
