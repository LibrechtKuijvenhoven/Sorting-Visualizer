import { combineReducers } from "@reduxjs/toolkit";

import algorithmSlice from "./algorithm/algorithmSlice";
import arrayStepsSlice from "./arraysteps/arrayStepsSlice";
import sizeArraySlice from "./sizearray/sizeArraySlice";
import arrayToSortSlice from "./arraytosort/arrayToSortSlice";

export const rootReducer = combineReducers({
    algorithm: algorithmSlice,
    sizeArray: sizeArraySlice,
    arraySteps: arrayStepsSlice, 
    arrayToSort: arrayToSortSlice

});
const pReducer = (state: any, action: any) => {
  
    return rootReducer(state, action)
}
  
export default pReducer;