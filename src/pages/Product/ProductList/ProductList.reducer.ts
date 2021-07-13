import * as types from "./ProductList.constants"
import produce from "immer"
import { AnyAction } from "redux"
import {
  TActionFetchProductsFail,
  TActionFetchProductsRequest,
  TActionFetchProductsSuccess
} from "./ProductList.constants"
import { WritableDraft } from "immer/dist/types/types-external"

interface IProductListState {
  loading: boolean
  productList: {
    products: IProduct[]
    total: number
    page: number
    pageSize: number
  }
}

const initialState: IProductListState = {
  loading: false,
  productList: {
    products: [],
    total: 0,
    page: 0,
    pageSize: 0
  }
}

type TActions =
  | TActionFetchProductsFail
  | TActionFetchProductsRequest
  | TActionFetchProductsSuccess

export const ProductListReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_PRODUCT_LIST_REQUESTED:
        draft.loading = true
        break
      case types.FETCH_PRODUCT_LIST_SUCCESS:
        draft.loading = false
        draft.productList = action.payload?.data as any
        break
      case types.FETCH_PRODUCT_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
