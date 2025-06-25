import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Server from './components/Server'
import Nav from './components/Nav'

const App = () => {
  
  return (
    <div className="w-screen bg-gray-800 text-white  mx-auto">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about " element={<About/>} />
        <Route path="/product " element={<Product/>} />
        <Route path="/service" element={<Server/>} />
      </Routes>
    </div>
  )
}

export default App



