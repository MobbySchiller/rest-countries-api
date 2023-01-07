import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

export const useShopDispatch: () => AppDispatch = useDispatch
export const useShopSelector: TypedUseSelectorHook<RootState> = useSelector