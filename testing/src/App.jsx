// import React, { captureOwnerStack } from 'react'
import { Fragment , useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {
  
  const [gender, setgenter] = useState("male")
  console.log(gender)

  const [todos, settodos] = useState([
    {id : 1 , title:" chal kam kar" , isCompleted:false},
  ])

  console.log(todos)

  // javas...
  return (
    <Fragment>
      
      {/* <Create  /> */}

      <Create gender={gender} setgenter={setgenter}  todos={todos} settodos={settodos} />

      <Read todos={todos} settodos={settodos} />

      {/* <Create title={title} settitle={settitle}  /> */}
  
    </Fragment>

  );
};
export default App












// import { useState } from "react"
// import Read from "./components/Read"
// import Create from "./components/Create"

// const App = ()=>{

//   const [ users , setuser] = useState([
//     {name:"john",age:"21"},
//     {name:"sarthak",age:"23"},
//     {name:"harry",age:"22"}
    
//   ]);

//   //javas..
//   return (
//     <div>
//       <Create/>

//       <Read users={users} setuser={setuser}/>
//       {/* <h1>hello</h1> */}
//     </div>
//   )
// }
// export default App

// const [gender, setgenter] = useState("male")
//   console.log(gender)



//  <Fragment>
//       <h1>Male or female</h1>
//       <form action="">

//         <input
//         value="male" 
//         type="radio"
//         onChange={(e)=>{setgenter(e.target.value)}}
//         checked = {gender == "male" && true}
//         /> Male


//          <input
//          onChange={(e)=>{setgenter(e.target.value)}}
//          value="Female" 
//          type="radio" 
//          checked = {gender == "Female" && true}

         
//          /> Feamle

//       </form>
      
//     </Fragment>