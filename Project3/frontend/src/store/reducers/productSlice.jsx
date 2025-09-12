
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
    wishlist:[],
    // selectedProduct: null,

};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{   
        //yah function sync hold kar sakta hai 
        loadproduct:(state,action) =>{   
            // here we can not call api
            state.products = action.payload;  // yah par data dhal rahe hai to ham kidhar ham or call karnge   // payload matlab  mjo bhi function ke andar call hoga vah aa kar chala jayega 
        },
        setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    wishlist: (state, action) => {
      // optional: prevent duplicates
      if (!state.wishlist.find((item) => item.id === action.payload.id)) {
        state.wishlist.push(action.payload);
      }
    },
    },
});

export default productSlice.reducer;
export const {  loadproduct, setSelectedProduct, wishlist } = productSlice.actions;
