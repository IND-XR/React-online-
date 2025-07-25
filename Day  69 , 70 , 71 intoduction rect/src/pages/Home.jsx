import React, { useEffect } from 'react'
import axios from '../utils/axios';

const Home = () => {
  const getproduct = async () =>{
    try{
      const {response} = await axios.get("/products/1"); // this is API Link
      console.log(response.data)
      //fetch
      // const stradata = await fetch('https://fakestoreapi.com/products/1')
      // const jsondata = await stradata.json()
      // console.log(jsondata)         
    }
    catch(error){
      console.log(error)
    }
  }

  // useEffect(()=>{
  //   console.log("Home.jsx Mounted");

  //   getproduct();

  //   return ( ) =>{
  //     console.log("Home.jsx UnMounted")
  //   }
  // })

   useEffect(()=>{
    getproduct();
  },[]);


  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>get products</button>
    </div>
  )
}
export default Home