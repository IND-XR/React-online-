import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate();  

  const NavigateHandler = (name) => { 
    navigate(`/product/detail/${name}`) 
  }

  return (
    <div>
      <h1 className='text-5x1 front-thin mb-5'> Products </h1>
      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-3  '> Product 1 </h1>
        <button onClick={()=> NavigateHandler("product 1 ")} className='bg-white text-black px-4 py-2 rounded'> see Details</button>
      </div>

      <div className='mb-10' >
        <h1 className='text-3xl font-thin mb-3'> Product 2 </h1>
        <button onClick= {()=> NavigateHandler("product 2 ")} className='bg-white text-black px-4 py-2 rounded'> see Details</button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-3'> Product 3 </h1>
        <button onClick={()=> NavigateHandler("product 3 ")} className='bg-white text-black px-4 py-2 rounded'> see Details</button>
      </div>
    </div>
  )
}

export default Product