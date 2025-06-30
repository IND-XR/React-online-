import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-4xl font-thin mb-3 '> Service</h1>
      <button onClick ={ () => navigate("/service/detail") } className='bg-white text-black px-4 py-2 rounded'> Go Back</button>
    </div>
  )
}

export default Service