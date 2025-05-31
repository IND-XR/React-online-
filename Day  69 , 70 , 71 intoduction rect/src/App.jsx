import { Fragment, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";


const App = () => {
  const [todos, settodos] = useState([

    { id: 1, title: "Kam Krle bahi", isCompleted: false },

  ]);
  // console.log(title);
  console.log(todos);

  //javas..
  return (
    <Fragment>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos}/>
    </Fragment>
  );
};

export default App;



// // 76 **************************************************************
// import { useState } from "react";

// const App = () => {
//   const [todos, settodos] = useState([
//     { id: 1, title: "Kam Krle bahi", isCompleted: false },
//   ]);

//   const [title, settitle] = useState("");
//   const [completed, setcompleted] = useState(true);
//   const [gender, setgender] = useState("male")

//   const [city, setcity] = useState("mumbai");

//   console.log(title);

//   //javas..
//   return (
//     <div>
//       <h1> Create takes</h1>
//       <form action="">
//         <input
//           onChange={(e) => settitle(e.target.value)}
//           value={title}
//           type="text"
//           placeholder="Takes"
//           name=""
//           id=""
//         />

//         // *Check box*
//         <input
//           type="checkbox"
//           onChange={(e) => { setcompleted(e.target.checked); }}
//           checked={completed}
//         />completed


//         <br /> <br />
//         // *Radio male*
//         <input
//           value="male"
//           onChange={(e) => { setgender(e.target.value);}}
//           checked = {gender == "male" && true}
//           type="radio"
//         />male

//         <br /> <br />

//         // *Radio Female*


//         <input
//           value="female"
//           onChange={(e) => { setgender(e.target.value); }}
//           checked = {gender == "female" && true}
//           type="radio"
//         /> Female

//         <br /> <br />

//         // * Select *
//         <select value = {city} name="" id="" onChange={(e)=>{setcity(e.target.value)}}   >
//           <option value="delhi"> Delhi </option>
//           <option value="mumbai"> mumbai </option>
//           <option value="kolkata"> kolkata </option>

//         </select>

//         <br /> <br />

//         <button>Create</button>
//       </form>
//     </div>
//   );
// };

// export default App;









// // 75 **************************************************************
// import { useState } from "react"
// import Create from "./components/Create";
// import Read from "./components/Read";

// const App = () => {
//   const [users , setusers] = useState(
//     [
//       { name : "john",age :12},
//       { name : "harry",age : 34},
//       { name : "sarthak",age : 45},
//     ]
//   );

//   //Javas..
//   //Javas..

//   return (
//     <div>
//       <Create/>
//       <Read users={users} setusers={setusers}/>
//     </div>
//   )
// }

// export default App

// const [Fullname, setfullname] = useState("");

// const [age, setage] = useState(18);

// const changeHandler = (e) =>{
//   setfullname(e.target.value)
// }
// console.log(Fullname)

// const changeHandler = (e) => setfullname(e.target.value)

// console.log(Fullname)

//  const changeHandlerage = (e) =>{
//   setage(e.target.value)
// }
// console.log(age)

// 72 **************************************************************
// import { useState } from "react";

// const App = () => {
//   // let username = " sarthak";
//   const [username ,setUsername] = useState ("sarthak");

//   const changeHandler = () =>{
//     // username = "Ankur"
//     setUsername("Ankur")
//     // let a use.(username = "Ankur")
//   }
//   console.log(username)

//   //javas..
//   return (
//     <div>
//       <h1>Username</h1>
//       <h1>{username}</h1>
//       <button onClick={changeHandler}> checkname </button>
//     </div>
//   )
// }

// export default App

// // Array of object

// const App = () => {

//   const profiles = [
//     { name : "john" ,age :12},
//     { name : "harry" ,age : 34},
//     { name : "sarthak" ,age : 45},

//   ];

//   const updatedProfiles = profiles.map((profile , index)=>{
//     return (
//     <li key={index}>
//       <span>Name: {profile.name}  </span>
//       <span>age: {profile.age}  </span>
//     </li>
//     )
//     console.log(profile.name, profile.age)

//   })

//   console.log(updatedProfiles)

//   //Javas..
//   return (
//     <div>
//       <h1> Rendering Json</h1>
//       <ol>{updatedProfiles}</ol>
//       {/* {profiles[0].name}    Array  */}
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let n = 12; //number
//   let s  = "hello world" // string
//   let b  = false; // Boolean
//   let nu  = null;
//   let un  = undefined;

//   let aar = [<h1>hello </h1>,1,2,3,4 , "hello ", null , undefined];

//   let obj = {
//     name : "anmol",
//     age : "12"
//   }

// // java..
//   return (
//     <div>
//       <h1> DataTypes</h1>
//       <h2> number : {n}</h2>
//       <h2> string : {s}</h2>
//       <h2> Boolean : {b ? "hello" : "Not Hello" } </h2>
//       <h2> null : {nu}</h2>
//       <h2> undefined : {un}</h2>
//       <h2> array : {aar}</h2>
//       {/* <h2> object : {obj}</h2> invalid  */}
//       <h2> object : {obj.name} | {obj.age}</h2>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {

//   // Non - parameterized function
//   const handleclick = () => {
//     alert("button clicked")
//   }

//   // parameterized function
// const handleparamclick = (msg) => {
//   alert(msg)
// }

// const wrapperhandler = () =>{
//   handleparamclick("raat anheri hai , bhuj gaye  diye  ")
// }

// //same // const wrapperhandler = () => handleparamclick("raat anheri hai , bhuj gaye  diye  ")

//   //js Logic..

//   return (
//     <>
//       <h1> hello </h1>
//       <h1>world</h1>
//       <button onClick={handleclick}>Click</button>
//       <button onClick={wrapperhandler}>Click to print parameter </button>

//     {/* on more option  */}
//     {/* <button onClick={() => handleparamclick("raat anheri hai , bhuj gaye  diye  ")}>Click to print parameter </button>   */}

//     </>
//   )
// }
// export default App

// // Empty tag  ***********************************************

// // const App = () => {
// //   return (
// //     <>
// //       <h1> hello </h1>
// //       <h1>world</h1>
// //     </>
// //   )
// // }
// // export default App

// // Fragment  ***********************************************

// // import { Fragment } from 'react'

// // const App = () => {
// //   return (
// //     <Fragment>
// //       <h1> hello </h1>
// //       <h1>world</h1>
// //     </Fragment>
// //   )
// // }

// // export default App
// // export const ;

// // ***********************************************

// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1> hello </h1>
// //       <h1>world</h1>
// //     </div>
// //   )
// // }

// // export default App
