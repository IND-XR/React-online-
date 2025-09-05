import React, { useEffect } from "react";
// import axios from  "../src/api/axiosconfig"
import { useSelector, useDispatch } from "react-redux";
import Mainroute from "./routes/Mainroute";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/userAction";
import { asyncloadproducts } from "./store/actions/productAction";
import { asyncgetusers } from "./store/userAction";

const App = () => {
  const data = useSelector((state) => state.user);

  //  const userData = useSelector((state) => state.user);
  // const productData = useSelector((state) => state.product.products);

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

  // useEffect(() => {
  //   dispatch(asyncgetusers());
  //   // getproduct();
  // }, [dispatch]);

  useEffect(()=>{
    dispatch(asyncloadproducts());
    dispatch(asynccurrentuser()); // jaise hi app chale loadproduct bhi chalna chaiye
  }, [dispatch])

  // console.log("User Data:", userData);
  // console.log("Products:", productData);
  
  return (
    <div className="W-screen h-scree">
     <Nav/>
     <Mainroute/>
    </div>
  );
};

export default App;
