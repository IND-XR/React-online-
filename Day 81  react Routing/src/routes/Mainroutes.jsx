import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Product from '../components/Product'
import Server from '../components/Server'
import Home from '../components/Home'
import { ProductDetails } from '../components/ProductDetails'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/detail' element={<ProductDetails/>}/>
            <Route path='/Server' element={<Server/>}/>

        </Routes>
    </div>
  )
}


export default Mainroutes