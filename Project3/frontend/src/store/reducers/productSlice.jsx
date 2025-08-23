
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
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

    },

});

export default productSlice.reducer;
export const { loadproduct } = productSlice.actions;
