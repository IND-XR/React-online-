import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx';
import './components/index.css';
import { ToastContainer } from 'react-toastify';
import Wrapper from "./Wrapper.jsx";


createRoot(document.getElementById('root')).render( 

  <Wrapper App={ <App/> } info={"hello"}/>

  // <wrapper>

  // </wrapper>
  // <StrictMode>
  //   <ToastContainer position="top-center" />
  //   <App/>
  // </StrictMode>
)

