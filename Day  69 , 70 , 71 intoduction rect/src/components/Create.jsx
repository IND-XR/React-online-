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
    <div>
        <br />
        <h1> Create takes</h1>
        <form action=""  onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Takes"
          name=""
          id=""
        /> 

        <button>Create</button>
      </form>
    </div>
  )
}

export default Create
