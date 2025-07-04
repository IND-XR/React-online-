import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'

const mainroutes = () => {
  return (
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Recipes' element={<Recipes/>}/>
             <Route path='/About' element={<About/>}/>
             <Route path='/Create' element={<Create/>}/>
        </Routes>
    )
}

export default mainroutes