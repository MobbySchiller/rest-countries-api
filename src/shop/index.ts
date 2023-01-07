import { configureStore } from '@reduxjs/toolkit'
import selectorsSlice from './selectorsSlice'
import displaySlice from './displaySlice'

const store = configureStore({
    reducer: {
        selectors: selectorsSlice.reducer,
        display: displaySlice.reducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch