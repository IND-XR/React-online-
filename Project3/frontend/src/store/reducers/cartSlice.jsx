import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[],
    items:[],

};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        loadcart:(state,action) =>{   
            state.carts = action.payload;   // payload matlab  mjo bhi function ke andar call hoga vah aa kar chala jayega 
        },

        addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    },
});


export default cartSlice.reducer;
export const { loadcart  , addtoCart , removeFromCart } = cartSlice.actions;