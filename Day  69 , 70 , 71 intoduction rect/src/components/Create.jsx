import { useState } from "react";
import {nanoid} from "nanoid";

const Create = (props) => {
    const todos = props.todos
    const settodos = props.settodos


    const [title, settitle] = useState("");

    const submitHandler = (e) =>{
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title,
      isCompleted:false,
    };
    console.log(newtodo);

    // copy original data , pushing a data in copy Data & setting the Data   
    let copytodos = [...todos];  //old data
    copytodos.push(newtodo)   // new data
    settodos(copytodos);       // old data  & new Data mix in one Data

    // settodos([...todos,newtodo]) wite in one line

    settitle("");
  };
  

    //javas..
  return (
     <div className=" w-[70%] p-10"> 
        <br />
        <h1 className="mb-10 text-5xl font-thin" > 
          Set <span className="text-red-400" > Create </span> takes</h1>
        <form action=""  onSubmit={submitHandler}>
        <input
        className="p-2 border-b w-full text-2xl font-thin outline-0"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Takes"
          name=""
          id=""
        /> 

        <button className="mt-5 text-xl px-10 py-2 border rounded" >Create</button>
      </form>
    </div>
  )
}

export default Create
