import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    user:userSlice
  }
})