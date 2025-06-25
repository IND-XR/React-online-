import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5">
        <Link to="/"> Home  </Link>
        <Link to="/product"> product </Link>
        <Link to="/service"> service </Link>
        <Link to="/about"> about  </Link>
    </div>
  )
}

export default Nav