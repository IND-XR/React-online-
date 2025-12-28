import { createSlice } from "@reduxjs/toolkit";

const initialState = {    // data kya aane wala hai iske andar  ( null yah object ) hoga
    user : null,
}

const userslice = createSlice({   // slice ek object hai 
  name: "user",
  initialState,   // it reserved key word
  reducers :{
    loaduser:(state ,action) =>{
      // state.data = action.payload
      state.user = action.payload
      // console.log(action)
    },
    logoutuser: (state) => {
      state.user = null;
    }

  },
});

export const {loaduser, logoutuser} = userslice.actions;

export default userslice.reducer;


