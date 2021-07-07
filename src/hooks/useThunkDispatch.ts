import {useDispatch} from 'react-redux'
import type {ThunkDispatchType} from '../store'


export const useThunkDispatch = () => useDispatch<ThunkDispatchType>();
