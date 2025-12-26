import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../store/reducers/userSlice"
import productSlice from '../store/reducers/productSlice'
import cartSlice from '../store/reducers/cartSlice'
import productReducer from "./reducers/productSlice";
import wishlistReducer from "./reducers/wishlistSlice"
// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from "../store/reducers/userSlice"
// import productReducer from '../store/reducers/productSlice'
// import cartReducer from '../store/reducers/cartSlice'
// import wishlistReducer from "./reducers/wishlistSlice"

// export default configureStore({
// eslint-disable-next-line react-refresh/only-export-components
const store = configureStore({
  reducer: {                   
    userReducer: userSlice,
    ProductReducer : productSlice,
    cartReducer: cartSlice,
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;