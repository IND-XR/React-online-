import React, { useState } from 'react'

const Create = (props) => {
    const gender = props.gender
    const setgenter = props.setgenter



    const [title, settitle] = useState("");

    console.log(settitle)

    const submitHandler=(e)=>{
        e.preventDefalut();
    }


    //javas..
  return (
    <div>
        <h1> Create a Takes </h1>
        <form action="" onSubmit={submitHandler}>
            <input 
            onChange={(e)=> e.settitle(e.target.value)}
            value={title}
            type="text" 
            placeholder='Takes'
            name="" 
            id="" 
            />
            <button>Create</button>

            <h1>Male or female</h1>
            
                    <input
                    value="male" 
                    type="radio"
                    onChange={(e)=>{setgenter(e.target.value)}}
                    checked = {gender == "male" && true}
                    /> Male
            
                     <input
                     onChange={(e)=>{setgenter(e.target.value)}}
                     value="Female" 
                     type="radio" 
                     checked = {gender == "Female" && true}
                     /> Feamle
        </form>
    </div>
  )
}

export default Create


























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
