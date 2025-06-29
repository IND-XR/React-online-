import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx';
import './components/index.css';
import { ToastContainer } from 'react-toastify';
import Wrapper from "./Wrapper.jsx";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render( 

  <BrowserRouter>
  <Wrapper> 
    {/* <h1> every one </h1> */}
    <ToastContainer position="top-center" /> {/* 1 step   */}
     <App/>
  </Wrapper>
  </BrowserRouter>

  
  
  // <Wrapper/>

  // <Wrapper App={ <App/> } info={"hello"}/>

  // <StrictMode>
  //   <ToastContainer position="top-center" />
  //   <App/>
  // </StrictMode>
)

