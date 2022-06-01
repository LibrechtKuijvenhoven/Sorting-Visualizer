import { createSlice } from "@reduxjs/toolkit";

interface IState{
    array: number[], 
    pair: number[],
    pairIndex: number[],
    isSorted: boolean
}

const initialstate: IState ={
  array: [], 
  pair: [],
  pairIndex: [],
  isSorted : false
}

const arrayStepsSlice = createSlice({
    name: 'SizeOfArray',
    initialState: initialstate,
    reducers: {
      setArrayStep: (state, action) => {     
        return action.payload
      },
      clearSteps: (state) => {
        return state ?? 0
      },
    }
  })

export const { setArrayStep, clearSteps } = arrayStepsSlice.actions

export default arrayStepsSlice.reducer