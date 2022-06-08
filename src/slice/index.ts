import { combineReducers } from "@reduxjs/toolkit";

import algorithmSlice from "./algorithm/algorithmSlice";
import arrayStepsSlice from "./arraysteps/arrayStepsSlice";
import sizeArraySlice from "./sizearray/sizeArraySlice";

export const rootReducer = combineReducers({
    algorithm: algorithmSlice,
    sizeArray: sizeArraySlice,
    arraySteps: arrayStepsSlice, 
});
const pReducer = (state: any, action: any) => {
  
    return rootReducer(state, action)
}
  
export default pReducer;