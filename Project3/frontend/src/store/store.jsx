import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./reducers/userSlice"
import Products from '../pages/products'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {                   
    userReducer: "",
    ProductReducer :"",
    cartReducer:"",
  },
});