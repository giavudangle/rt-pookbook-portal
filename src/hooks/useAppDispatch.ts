import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import type {AppDispatchType, RootStateType} from '../store'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
