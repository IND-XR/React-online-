// import axios from "axios";
import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";


// export const asynccurrentuser = () => async (dispatch, getState) =>{
//     try {

//     //Data ko local storage ke andar save karnege
//     const user = JSON.parse(localStorage.getItem("user"));

//     // user ko userslice ke andar add karenge
//     if(user) dispatch(loaduser(user));
//     else console.log("user not login !!")

//     } catch (error) {
//         console.log("Errors",error)
        
//     }

// }

export const asynccurrentuser = () => async (dispatch) => {
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user) {
          dispatch(loaduser(user));
        }
      } catch (err) {
        console.error("Invalid JSON in localStorage:", storedUser);
        localStorage.removeItem("user"); // cleanup broken data
      }
    } else {
      console.log("User not logged in !!");
    }
  } catch (error) {
    console.log("Errors in asynccurrentuser:", error);
  }
};

export const asynclogoutuser = () => async (dispatch, getState) =>{
    try {

    //Data ko local storage ke andar save karnege
    // localStorage.setItem("user","");
    localStorage.removeItem("user")
    // dispatch(loaduser(null)); // reset redux   exta
    console.log("user logged Out")
    } catch (error) {
        console.log("Errors",error)
        
    }

}

export const asyncloginuser = (user) => async (dispatch, getState) =>{
    try {

        // there is no API call this 
        // **********this thing to do************
        // only person ko find karna hai 
        // local storage ke andar hai ya nahi vah check kar hai 
        
    const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);   // this is a API Create by me  /// use se email & or password nikal nahi  or login ke time check karna hai 
    
    console.log("Response : ", data);
    if (data.length === 0) {
      console.log("Invalid email or password");
      return;
    }

    //Data ko local storage ke andar save karnege
    localStorage.setItem("user",JSON.stringify(data[0]));

    } catch (error) {
        console.log("Errors",error)
        
    }

}

export const asyncregisterusers = (user) => async (dispatch, getstate) => {
  try {
    // Only send plain values, not DOM nodes
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin || false,
    };

    console.log("Sending user:", payload);

    const res = await axios.post("/users", user);
    console.log("Response : ", res.data);

    // localStorage.setItem("user", JSON.stringify(res.data));
    // dispatch(loaduser(res.data)); // ✅ update redux
  } catch (error) {
    console.log("Errors", error);
  }
};
