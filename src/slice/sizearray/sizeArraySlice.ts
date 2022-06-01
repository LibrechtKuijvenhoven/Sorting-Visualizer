import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const sizeArraySlice = createSlice({
    name: 'SizeOfArray',
    initialState: 0,
    reducers: {
      setSize: (state, action) => {      
        return action.payload
      },
      clearSize: (state) => {
        return 0
      },
    }
  })

export const { setSize, clearSize } = sizeArraySlice.actions

export default sizeArraySlice.reducer