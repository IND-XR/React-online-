import React, { useEffect } from 'react'
// import axios from  "../src/api/axiosconfig"
import { asyncgetusers } from './store/userAction'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {

  const data  = useSelector((state) => state)
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

  useEffect(()=>{
    dispatch(asyncgetusers());
    // getproduct();
  },[]);


  return (
    <div>App</div>
  )
};

export default App