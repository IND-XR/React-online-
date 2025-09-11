
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Home  from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Services from '../pages/Services'
import CreateProduct from '../pages/Product/CreateProduct'
import UpdateProduct from '../pages/Product/UpdateProduct'
// import ProductsDetail from '../pages/Product/ProductDetail'

import ProductDetail from '../pages/Product/ProductDetail'


const Mainroute = () => {
  return <Routes>

     <Route path="/Home" element={<Home/>} />
     <Route path="/products" element={<Products/>} />
     <Route path='/login'  element={<Login/>} />
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Services' element={<Services/>}/>

     <Route path='/admin/CreateProduct' element={<CreateProduct/>}/>
     <Route path='/admin/UpdateProduct' element={<UpdateProduct/>}/>
     <Route path='/productsDetail' element={<ProductDetail/>}/>

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