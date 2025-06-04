// import { useState } from "react"

// const Create = (props) => {
//     console.log(props)
//     //name 
//     const [Fullname , setFullname] = useState("");

//     const Fullchange = (e) =>{
//         setFullname(e.target.value)

//     }
//     console.log(Fullname)

//     // age

//     const [age , setage] = useState(18);

//     const agechange = (e) =>{
//         setage(e.target.value)

//     }
//     console.log(age)




//     const submitHandler =(e)=>{
//         e.preventDefault()
//         const newuser = {Fullname , age };
//         console.log(newuser)
//     }



// //javas...
//   return (
//     <div>
//         <h1> Registers user</h1>
//         <form action="" onSubmit={submitHandler}>

//             <input onChange={Fullchange} value={Fullname} type="text" placeholder="Full name" />
//             <input onChange={agechange} value={age}       type="number" placeholder="Age" />  

//         <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Create
