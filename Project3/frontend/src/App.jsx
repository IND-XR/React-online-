import React, { useEffect } from "react";
// import axios from  "../src/api/axiosconfig"
import { asyncgetusers } from "./store/userAction";
import { useSelector, useDispatch } from "react-redux";
import Mainroute from "./routes/Mainroute";
import Nav from "./components/Nav";

const App = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const getproduct = async () =>{
  //   try{
  //     const res = await axios.get("/products")
  //     console.log(res)
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  console.log(data);

  useEffect(() => {
    dispatch(asyncgetusers());
    // getproduct();
  }, [dispatch]);
  
  return (
    <div className="W-screen h-scree">
     <Nav/>
     <Mainroute/>
     
    </div>
  );
};

export default App;
