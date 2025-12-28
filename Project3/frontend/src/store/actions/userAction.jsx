// import axios from "axios";
import axios from "../../api/axiosconfig";
import { loaduser, logoutuser } from "../reducers/userSlice";


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
      localStorage.removeItem("user")
      dispatch(logoutuser()); // reset redux   
      console.log("user logged Out")
    } catch (error) {
        console.log("Errors",error)
    }
}

export const asyncloginuser = (user) => async (dispatch, getState) =>{
    try {
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        
        console.log("Response : ", data);
        if (data.length === 0) {
          console.log("Invalid email or password");
          return;
        }

        //Data ko local storage ke andar save karnege
        localStorage.setItem("user", JSON.stringify(data[0]));
        dispatch(loaduser(data[0])); // ✅ update redux
        return data[0];

    } catch (error) {
        console.log("Login Error:", error)
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

    const res = await axios.post("/users", payload);
    console.log("Registration Response : ", res.data);

    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(loaduser(res.data)); // ✅ update redux
    return res.data;
  } catch (error) {
    console.log("Registration Error:", error);
  }
};
