import { Route,  Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Server from '../components/Server'


const mainroutes = () => {
  return (
    <div className="absolute px-[10%]">
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Server" element={<Server/>}/>
      </Routes>
    </div>
  )
}

export default mainroutes