import produce from "immer"
import { WritableDraft } from "immer/dist/internal"
import * as types from "./Provider.constants"

interface IProviderState {
  loading: boolean
  providers: IProvider[]
}

const initialState: IProviderState = {
  loading: false,
  providers: []
}

type TActions =
  | types.TActionFetchProvidersFail
  | types.TActionFetchProvidersRequest
  | types.TActionFetchProvidersSuccess

export const ProviderReducer = (state = initialState, action: TActions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_PROVIDERS_REQUESTED:
        draft.loading = true
        break
      case types.FETCH_PROVIDERS_SUCCESS:
        draft.loading = false
        draft.providers = action.payload?.data.providers
          .data as WritableDraft<IProvider>[]
        break
      case types.FETCH_PROVIDERS_FAIL:
        draft.loading = false
        break
      default:
        return state
    }
  })
