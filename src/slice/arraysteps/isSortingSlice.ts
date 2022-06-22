import { createSlice } from "@reduxjs/toolkit";
  
const isSortingSlice = createSlice({
    name: 'isSorting',
    initialState: false,
    reducers: {
        setIsSorting: (state, action) => {     
            return action.payload
        }
    }
})

export const { setIsSorting } = isSortingSlice.actions

export default isSortingSlice.reducer