import React from 'react'
import Mainroutes from './routes/Mainroutes.jsx'
import Navbar from './Components/Navbar.jsx'


const App = () => {
  return (
    <div className=' py-10 px-[10%] w-screen h-screen text-white font-thin bg-gray-800'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App