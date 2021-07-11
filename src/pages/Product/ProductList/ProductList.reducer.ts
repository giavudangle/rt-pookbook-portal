import * as types from "./ProductList.constants"
import produce from "immer"

const initialState = {
  loading: false,
  productList: [] as IProduct[]
}

export const ProductListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_PRODUCT_LIST_REQUESTED:
        draft.loading = true
        break
      case types.GET_PRODUCT_LIST_SUCCESS:
        action.payload.data.map(e => {
          e.provider = e.provider.name,
          e.publisher= e.publisher.name,
          e.author = e.author.name,
          e.category = e.category.name
        })
        draft.loading = false
        draft.productList = action.payload.data
        break
      case types.GET_PRODUCT_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
