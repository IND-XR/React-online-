import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>Nav
        <Link to="/"> Homes </Link>
        {/* <Link to="/Product"> product </Link> */}
        <Link to="/About"> about  </Link>
       
    </div>
  )
}

export default Nav