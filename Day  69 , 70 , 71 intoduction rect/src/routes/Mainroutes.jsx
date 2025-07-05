import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'

const mainroutes = () => {
  return (
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Recipes' element={<Recipes/>}/>
             <Route path='/Recipes/details/:id' element={<SingleRecipe/>}/>
             <Route path='/Create' element={<Create/>}/>

             <Route path='/About' element={<About/>}/>
        </Routes>
    )
}

export default mainroutes