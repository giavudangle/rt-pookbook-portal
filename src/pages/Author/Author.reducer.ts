import produce from "immer"
import { WritableDraft } from "immer/dist/internal"
import * as types from "./Author.constants"

interface IAuthorState {
  loading: boolean
  authors: IAuthor[]
}

const initialState: IAuthorState = {
  loading: false,
  authors: []
}

type TActions =
  | types.TActionFetchAuthorsSuccess
  | types.TActionFetchAuthorsRequest
  | types.TActionFetchAuthorsFail

export const AuthorReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_AUTHORS_REQUESTED:
        draft.loading = true
        break
      case types.FETCH_AUTHORS_SUCCESS:
        draft.loading = false
        draft.authors = action.payload?.data.authors
          .data as WritableDraft<IAuthor>[]
        break
      case types.FETCH_AUTHORS_FAIL:
        draft.loading = false
        break
      default:
        return state
    }
  })
