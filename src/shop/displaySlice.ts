import { createSlice } from '@reduxjs/toolkit'

// interface Info {
//     name: string
//     population: string
//     region: string
//     capital: string
//     flag: string
// }

const initialState: any = {
    display: []
}

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        changeDisplay(state, action) {
            const { data } = action.payload
            state.display = data
        }
    }
})

export const displayActions = displaySlice.actions
export default displaySlice