import React from 'react'

const App = () => {

  // Non - parameterized function 
  const handleclick = () => {
    alert("button clicked")
  }

  // parameterized function
const handleparamclick = (msg) => {
  alert(msg)
}

const wrapperhandler = () =>{
  handleparamclick("raat anheri hai , bhuj gaye  diye  ")
}

//same // const wrapperhandler = () => handleparamclick("raat anheri hai , bhuj gaye  diye  ")


  //js Logic.. 


  return (
    <>
      <h1> hello </h1>
      <h1>world</h1>
      <button onClick={handleclick}>Click</button>
      <button onClick={wrapperhandler}>Click to print parameter </button>
      
    {/* on more option  */}
    {/* <button onClick={() => handleparamclick("raat anheri hai , bhuj gaye  diye  ")}>Click to print parameter </button>   */}


    </>
  )
}
export default App















// Empty tag  ***********************************************



// const App = () => {
//   return (
//     <>
//       <h1> hello </h1>
//       <h1>world</h1>
//     </>
//   )
// }
// export default App



// Fragment  ***********************************************


// import { Fragment } from 'react'


// const App = () => {
//   return (
//     <Fragment>
//       <h1> hello </h1>
//       <h1>world</h1>
//     </Fragment>
//   )
// }

// export default App
// export const ;


// ***********************************************

// import React from 'react'


// const App = () => {
//   return (
//     <div> 
//       <h1> hello </h1>
//       <h1>world</h1>
//     </div>
//   )
// }

// export default App