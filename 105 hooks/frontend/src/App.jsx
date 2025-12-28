import React, { useMemo } from 'react'

import { useState } from 'react'

const App = () => {
  const [add, setadd] = useState(0);
  const [sub, setsub] = useState(99);


  const Product = useMemo(() =>{
    console.log("Product Rendered");
    return add * 2;
  }, [add]);
   


return (
    <div className=' py-10 px[10%] text-white bg-gray-500 h-screen w-screen font-thin'>
      <h1 className='mt-10 md-5 text-6xl'>{Product} </h1>

      <div>

        <button onClick={ () => setadd(add+1) } className=' p-5 text-2xl  rounded bg-green-400 mr-5'>  + </button>
        <span className='text-5xl ml-5 font-black'>{add}</span>
        <br />

        <button onClick={ () => setsub( sub - 1) }  className='p-5  text-2xl  rounded bg-red-400  mr-5'>  -  </button>
        <span className='text-5xl ml-5 font-black'>{sub}</span>

      </div>
    </div>
  )
}

export default App
