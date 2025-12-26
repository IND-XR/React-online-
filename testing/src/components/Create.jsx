// import React, { useState } from "react";
import {nanoid} from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { todocontent } from "../Wrapper";

const Create = () => {
  const [todos, settodos]  = useContext(todocontent);
    // const  [gender, setgenter]  = useContext(todocontent)

  // const gender = props.gender;
  // const setgenter = props.setgenter;
  // const todos = props.todos;
  // const settodos = props.settodos;

  
  // const [title, settitle] = useState("");

  // console.log(title);

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid(),
    data.isCompleted = false;
    // data.title 
    

    const copytodos = [...todos];
    copytodos.push(data)
    settodos(copytodos)

      
    reset();
    // e.preventDefault();


//   const newtodo = {
//     id : nanoid(), 
//     title,
//     isCompleted:false,
//   };

//   console.log(newtodo);

//   let copytodos = [...(todos || [])] ;
//   copytodos.push(newtodo)
//   settodos(copytodos);

//   settitle("");
  
};



  //javas..
  return (
    <div>
      <h1> Create a Takes </h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>

        <input
         {...register("title",{required :"title can not be empty",})}
          // onChange={(e) => settitle(e.target.value)}
          // value={title}
          type="text"
          placeholder="Takes"
          // name=""
          // id=""
          
        />
        {/* {errors && errors.title && errors.title.message && <small>{errors.title.message}</small> } */}
        <small className="font-thin text-red-400">{errors?.title?.message}</small>

        <button>Create</button>

        {/* ********************* */}

        <h1>Male or female</h1>

        {/* <input
          value="male"
          type="radio"
          onChange={(e) => { setgenter(e.target.value); }}
          checked={gender == "male" && true}
        />{" "} Male

        <input
          onChange={(e) => { setgenter(e.target.value); }}
          value="Female"
          type="radio"
          checked={gender == "Female" && true}
        />{" "} Feamle */}

      </form>
    </div>
  );
}

export default Create;

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
