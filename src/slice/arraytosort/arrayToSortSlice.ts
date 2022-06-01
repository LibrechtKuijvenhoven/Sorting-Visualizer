import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialstate = {
    arrayToSort: []
}

export interface IArrayState{
  arrayToSort: number[]
}

const arrayToSortSlice = createSlice({
    name: 'ArrayToSort',
    initialState: initialstate,
    reducers: {
      setArrayToSort: (state, action) => {      
        return action.payload
      }
    }
  })

export const { setArrayToSort } = arrayToSortSlice.actions

export default arrayToSortSlice.reducer