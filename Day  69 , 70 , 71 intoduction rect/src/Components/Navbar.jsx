import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-10 text-sm mb-10'>
        <NavLink className={(e)=>e.isActive ? "text-red-300" :"" } to="/">Home </NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" :"" } to="/Recipes"> Recipes </NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" :"" } to="/About"> About </NavLink>
        <NavLink className={`px-4 py-2 bg-gray-900 rounded-2xl $(e)=>e.isActive ? "text-red-300" :""`} to="/Create"> Create Recipe </NavLink>
    </div>
  )
}

export default Navbar