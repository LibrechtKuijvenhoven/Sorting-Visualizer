import { createSlice } from "@reduxjs/toolkit"
import type { SortingAlgorithm } from "../../algorithms/algorithm"

interface IAlgorithm {
    algorithm?: SortingAlgorithm
}

const initialState: IAlgorithm = {
    algorithm : undefined,
}

const algorithmSlice = createSlice({
    name: 'Algortihm',
    initialState,
    reducers: {
      setAlgorithm: (state, action) => {
        state.algorithm = action.payload
      },
      clearAlgorithm: (state) => {
        state.algorithm = undefined
      },
    }
  })

export const { setAlgorithm, clearAlgorithm } = algorithmSlice.actions

export default algorithmSlice.reducer