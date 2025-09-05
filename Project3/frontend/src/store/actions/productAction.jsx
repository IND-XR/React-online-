
import { Sidebar } from "lucide-react";
import axios from "../../api/axiosconfig";
// import { loaduser } from "../reducers/userSlice";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts = ( ) => async (dispatch, getState) => {   // yah call hoga usse ke baad 
    try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));  // load = reducers ka productSlice hai / data loadproduct slice ke andar  chale jayega  
} catch (error) {
    console.log("Error loading products",error);
}
}

// jo bhi new data aa raha hai vah yah save ho raha hai
export const asynccreateproduct = (product) => async (dispatch, getstate) =>{
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproducts()); // dispatch 
    } catch (error) {
        console.log("Error Create product",error);
    }
};