import { createSlice } from "@reduxjs/toolkit";

const initialState = {    // data kya aane wala hai iske andar  ( null yah object ) hoga
    data : []
}

const userslice = createSlice({   // slice ek object hai 
  name: "user",
  initialState,   // it reserved key word
  reducers :{
    loaduser:(state ,action) =>{
      state.data = action.payload
      // console.log(action)
    }
  },
});

export const {loaduser}  = userslice.actions;

export default userslice.reducer;


