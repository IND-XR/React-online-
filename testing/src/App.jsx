import { useState } from "react"
import Read from "./components/Read"
import Create from "./components/Create"

const App = ()=>{

  const [ users , setuser] = useState([
    {name:"john",age:"21"},
    {name:"sarthak",age:"23"},
    {name:"harry",age:"22"}
    
  ]);

  //javas..
  return (
    <div>
      <Create/>

      <Read users={users} setuser={setuser}/>
      {/* <h1>hello</h1> */}
    </div>
  )
}

export default App
