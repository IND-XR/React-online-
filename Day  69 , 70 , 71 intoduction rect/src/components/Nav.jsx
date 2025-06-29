import React from 'react'
import { NavLink } from  'react-router-dom'

const Nav = () => {
  return (
    
    <div className='text-white flex justify-center gap-10 p-5'>  
       <NavLink className={(e)=> (e.isActive ? "text-red-300": " ")} to='/'>Home </NavLink>
       <NavLink className={(e)=> (e.isActive ? "text-red-300": " ")} to='/product'> Product </NavLink>
       <NavLink className={(e)=> (e.isActive ? "text-red-300": " ")} to='/Server'> Server </NavLink>
       <NavLink className={(e)=> (e.isActive ? "text-red-300": " ")} to='/About'> About </NavLink>
    </div>
  )
}

export default Nav