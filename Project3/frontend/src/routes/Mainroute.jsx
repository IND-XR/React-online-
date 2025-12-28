import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Services from '../pages/Services'
import CreateProduct from '../pages/Product/CreateProduct'
import UpdateProduct from '../pages/Product/UpdateProduct'
import ProductDetail from '../pages/Product/ProductDetail'
import LoginChoice from '../pages/LoginChoice'
import AdminLogin from '../pages/AdminLogin'
import UserLogin from '../pages/UserLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'
import Cart from '../pages/user/Cart'
import Wishlist from '../pages/user/Wishlist'


const Mainroute = () => {
  return <Routes>
     {/* Public Routes */}
     <Route path="/" element={<Home/>} />
     <Route path="/Home" element={<Home/>} />
     <Route path="/products" element={<Products/>} />
     <Route path='/About' element={<About/>}/>
     <Route path='/Services' element={<Services/>}/>

     {/* Cart & Wishlist Routes */}
     <Route path="/cart" element={<Cart/>} />
     <Route path="/wishlist" element={<Wishlist/>} />

     {/* Auth Routes */}
     <Route path="/login-choice" element={<LoginChoice/>} />
     <Route path="/admin-login" element={<AdminLogin/>} />
     <Route path="/user-login" element={<UserLogin/>} />
     <Route path='/login'  element={<Login/>} />
     <Route path='/Signup' element={<Signup/>}/>

     {/* Admin Routes */}
     <Route path="/admin-dashboard" element={<AdminDashboard/>} />
     <Route path='/admin/CreateProduct' element={<CreateProduct/>}/>
     <Route path='/admin/UpdateProduct/:id' element={<UpdateProduct/>}/>

     {/* Product Routes */}
     <Route path='/product-detail/:id' element={<ProductDetail/>}/>
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