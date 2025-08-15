
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Home  from '../pages/Home'
import Products from '../pages/products'
import Login from '../pages/Login'



const Mainroute = () => {
  return <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/products" element={<Products/>} />
     <Route path='/login'  element={<Login/>} ></Route>

  </Routes>
}

export default Mainroute

// import React from 'react'
// import { Routes } from 'react-router-dom'
// import Home from '../pages/Home'

// const mainrouters = () => {
//   return <Routes>
//     <Route path="/" element={<Home/>} />
//   </Routes>
// }

// export default mainrouters