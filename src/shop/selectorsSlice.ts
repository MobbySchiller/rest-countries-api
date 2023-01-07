import { createSlice } from '@reduxjs/toolkit'

interface SelectorsState {
    search: string
    filter: string
}

const initialState: SelectorsState = {
    search: '',
    filter: ''
}

const selectorsSlice = createSlice({
    name: 'selectors',
    initialState,
    reducers: {
        changeSearch(state, action) {
            const { value } = action.payload
            state.search = value
        },
        changeFilter(state, action) {
            const { value } = action.payload
            state.filter = value
        }
    }
})

export const selectorsActions = selectorsSlice.actions
export default selectorsSlice