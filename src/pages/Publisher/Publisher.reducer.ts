import produce from "immer"
import { WritableDraft } from "immer/dist/internal"
import * as types from "./Publisher.constants"

interface IPublisherState {
  loading: boolean
  publishers: IPublisher[]
}

const initialState: IPublisherState = {
  loading: false,
  publishers: []
}

type TActions =
  | types.TActionFetchPublishersFail
  | types.TActionFetchPublishersRequest
  | types.TActionFetchPublishersSuccess

export const PublisherReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_PUBLISHERS_REQUESTED:
        draft.loading = true
        break
      case types.FETCH_PUBLISHERS_SUCCESS:
        draft.loading = false
        draft.publishers = action.payload?.data.publishers
          .data as WritableDraft<IPublisher>[]
        break
      case types.FETCH_PUBLISHERS_FAIL:
        draft.loading = false
        break
      default:
        return state
    }
  })
