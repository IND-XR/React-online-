import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Wrapper from './Wrapper.jsx'
import {BrowserRouter} from "react-router-dom"


createRoot(document.getElementById('root')).render(

  // <Wrapper App={<App/>} />
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  // <Wrapper>
  //   {/* <h1>every</h1> */}
  //   <App/>
  // </Wrapper>
)
