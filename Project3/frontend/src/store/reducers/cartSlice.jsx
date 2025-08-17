import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[],
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        loadcart:(state,action) =>{
            state.carts = action.payload;   // payload matlab  mjo bhi function ke andar call hoga vah aa kar chala jayega 
        },
    },


});