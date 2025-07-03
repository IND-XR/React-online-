import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductDetails = () => {
   const navigate =  useNavigate()


  return (
    <div>
      <div>
          <h1 className='text-4xl font-thin mb-3'> product name</h1>
        <h2 className='text-2xl font-thin mb-5'>Product deatil</h2>
        <button onClick={()=>{navigate(-1)}} className='bg-white text-black px4 py-2 rounded'> go back </button>


      </div>
      
        <div>
          <h1 className='text-4xl font-thin mb-3'> product name</h1>
        <h2 className='text-2xl font-thin mb-5'>Product deatil</h2>
        <button onClick={()=>{navigate(-1)}} className='bg-white text-black px4 py-2 rounded'> go back </button>
        </div>

         <div>
          <h1 className='text-4xl font-thin mb-3'> product name</h1>
        <h2 className='text-2xl font-thin mb-5'>Product deatil</h2>
        <button onClick={()=>{navigate(-1)}} className='bg-white text-black px4 py-2 rounded'> go back </button>
        </div>
    

    </div>

  )
}
