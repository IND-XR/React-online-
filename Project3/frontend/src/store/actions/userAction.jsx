// import axios from "axios";
import axios from "../../api/axiosconfig";
export const asyncregisterusers = (user) => async (dispatch, getstate) => {
  try {
    // Only send plain values, not DOM nodes
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
    console.log("Sending user:", payload);

    const res = await axios.post("/users", user);
    console.log("Response : ", res);
  } catch (error) {
    console.log("Errors", error);
  }
};
