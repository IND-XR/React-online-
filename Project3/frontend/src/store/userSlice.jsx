import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
}

const userslice = createSlice({
  name: "user",
  initialState,
  reducers :{
    loaduser:(state ,action) =>{
      state.data = action.payload
      // console.log(action)
    }
  },
});

export const {loaduser}  = userslice.actions;

export default userslice.reducer;


