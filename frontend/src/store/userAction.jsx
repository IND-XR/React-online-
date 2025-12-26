import axios from "../api/axiosconfig"
import { loaduser } from "./reducers/userSlice"

export const asyncgetusers =  () => async (dispatch, getState) =>{

    try{
        console.log("State after dispatch:", getState())
        const res = await axios.get("/Users")
        // console.log(res)
        dispatch(loaduser(res.data)) // this is also action  that way i want to dispatch
        // console.log("State after dispatch:", getState())

    }catch(error){
        console.log(error)

    }
}