import { combineReducers } from "@reduxjs/toolkit";

import algorithmSlice from "./algorithm/algorithmSlice";
import sizeArraySlice from "./sizearray/sizeArraySlice";

export const rootReducer = combineReducers({
    algorithm: algorithmSlice,
    sizeArray: sizeArraySlice

    
});
const pReducer = (state: any, action: any) => {
  
    return rootReducer(state, action)
}
  
  export default pReducer
  