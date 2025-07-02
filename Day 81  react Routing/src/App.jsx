import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Mainroutes from './routes/mainroutes'


const App = () => {
  return (
    <div className="relative text-white bg-gray-800 w-screen h-screen">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App



