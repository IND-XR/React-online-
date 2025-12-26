import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5">
        <NavLink className={(e)=>(e.isActive ? "text-red-300":"")} to="/"> Homes  </NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-red-300":"")} to="/Product"> product </NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-red-300":"")} to="/server"> server </NavLink>
        <NavLink className={(e)=>(e.isActive ? "text-red-300":"")} to="/About"> about  </NavLink>
    </div>
  )
}
history
export default Nav