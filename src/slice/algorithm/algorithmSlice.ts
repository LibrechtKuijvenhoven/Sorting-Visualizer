import { createSlice } from "@reduxjs/toolkit"
import type { SortingAlgorithm } from "../../algorithms/algorithm"
import { HeapSortAlgorithm } from "../../algorithms/HeapSort"

interface IAlgorithm {
    algorithm?: SortingAlgorithm
}

const initialState: IAlgorithm = {
    algorithm : HeapSortAlgorithm,
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