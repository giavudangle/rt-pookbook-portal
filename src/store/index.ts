import { Action, applyMiddleware, createStore, compose } from "redux"

import reducers from "../reducers"
import thunk, { ThunkDispatch } from "redux-thunk"

const composeEnhancers =
  typeof window === "object" &&
  process.env.NODE_ENV === "development" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(reducers, enhancer)

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export type ThunkDispatchType = ThunkDispatch<RootStateType, any, Action>
