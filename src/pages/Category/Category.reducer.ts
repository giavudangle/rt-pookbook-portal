import produce from "immer"
import { WritableDraft } from "immer/dist/internal"
import * as types from "./Category.constants"

interface ICategoryState {
  loading: boolean
  categories: ICategory[]
}

const initialState: ICategoryState = {
  loading: false,
  categories: []
}

type TActions =
  | types.TActionFetchCategoriesFail
  | types.TActionFetchCategoriesRequest
  | types.TActionFetchCategoriesSuccess

export const CategoryReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_CATEGORIES_REQUESTED:
        draft.loading = true
        break
      case types.FETCH_CATEGORIES_SUCCESS:
        draft.loading = false
        draft.categories = action.payload?.data.categories
          .data as WritableDraft<ICategory>[]
        break
      case types.FETCH_CATEGORIES_FAIL:
        draft.loading = false
        break
      default:
        return state
    }
  })
