import { Fragment , useState } from "react";
import Nav from "./components/Nav";
import { Route,  Routes } from 'react-router-dom'
import Server from "./components/Server";
import Product from "./components/Product";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {

  //javas..
  return (

    <div className="relative text-white  bg-gray-800 w-screen h-screen">      
     <div className="text-white flex w-20px h-20px ">
      <Nav/>
      </div>
      <div className="absolute"> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Server" element={<Server/>}/>
      </Routes>
      </div>
    </div>
  );
};

export default App;
