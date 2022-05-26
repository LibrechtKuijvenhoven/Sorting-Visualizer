import { configureStore } from '@reduxjs/toolkit'
import pReducer from '../slice'

export default configureStore({
  reducer: {pReducer}
})