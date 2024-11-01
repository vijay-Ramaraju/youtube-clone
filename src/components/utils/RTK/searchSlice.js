import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        
    },
    reducers: {
        addCache: (state, action) => {
            
            Object.assign(state, action.payload)
            if (Object.keys(state).length >= 5) {
                const firstObj = Object.keys(state)[0]
                delete state[firstObj];

            }
        }
    }
})

export const { addCache } = searchSlice.actions
export default searchSlice.reducer