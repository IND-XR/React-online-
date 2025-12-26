import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigates = useNavigate()

  return (
    <div>
      <h1 className='text-5x1 front-thin mb-5'> product </h1>
      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-3'> product 1 </h1>
        <button onClick={()=>{navigates(`/product/detail`)}} className='bg-white text-black px-4 py-2 rounded'> see Details</button>
      </div>
    </div>
  )
}

export default Product
