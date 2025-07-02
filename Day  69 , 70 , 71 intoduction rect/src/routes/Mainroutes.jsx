import { Route,  Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Service from '../components/Service'
import ProductDetails from '../components/ProductDetails'
import ServiceDetails from '../components/ServiceDetails'
import Serviceupdate from '../components/Serviceupdate'

const mainroutes = () => {
  return (
    <div className="absolute px-[10%]">
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Product/detail/:name" element={<ProductDetails/>}/>
        
        <Route path="/service" element={<Service/>}> 
              <Route path="/service/detail" element={<ServiceDetails/>}/>
              <Route path="/service/update" element={<Serviceupdate/>}/>
        </Route>

      </Routes>
    </div>
  )
}
export default mainroutes