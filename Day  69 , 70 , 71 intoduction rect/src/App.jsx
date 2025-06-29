import { Fragment , useState } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/mainroutes";

const App = () => {

  //javas..
  return (

    <div className="relative text-white  bg-gray-800 w-screen h-screen">      
      <Nav/>
      <Mainroutes/> 
    </div>
  );
};

export default App;
