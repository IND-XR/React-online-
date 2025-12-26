
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
    selectedProduct: null,
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{   
        loadproduct:(state,action) =>{   
            state.products = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export default productSlice.reducer;
export const { loadproduct, setSelectedProduct } = productSlice.actions;
