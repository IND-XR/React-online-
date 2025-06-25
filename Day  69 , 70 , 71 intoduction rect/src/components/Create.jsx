// import { useState } from "react";
import {nanoid} from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { todocontent } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontent);
    // const todos = props.todos
    // const settodos = props.settodos;
    
    const {
      register ,  //  use for two way binding
      handleSubmit,  // is used for submission
      reset,         // from ko reset karne ke liye 
      formState:{errors}, // for finding error sab error yah mileange  
    } = useForm();  // iske andar se ham sab nikalenage 


    // const [title, settitle] = useState("");  //  Delete two way binding

    const SubmitHandler = (data) =>{
      // e.preventDefault();
      // console.log(data)

      data.isCompleted = false;
      data.id = nanoid();
      
      const copytodos = [...todos];
      copytodos.push(data)
      settodos(copytodos)

      toast.success("todo Create ")

      reset();


    // const newtodo = { 
    //   id: nanoid(),
    //   // title se,,
    //   isCompleted:fal
    // };
    // console.log(newtodo);

    // copy original data , pushing a data in copy Data & setting the Data   
  //   let copytodos = [...todos];  //old data  Delete two way binding
  //   copytodos.push(newtodo)   // new data    Delete two way binding
  //   settodos(copytodos);       // old data  & new Data mix in one Data

  //   // settodos([...todos,newtodo]) wite in one line

  //   settitle("");  Delete two way binding
  };

    //javas..
  return (
     <div className=" w-[70%] p-10"> 
        <br />
        <h1 className="mb-10 text-5xl font-thin" > 
          Set <span className="text-red-400" > Create </span> takes</h1>


        <form onSubmit={handleSubmit(SubmitHandler)}>
        
        <input
          {...register("title",{required :"title can not be empty",})}
          // onChange={(e) => settitle(e.target.value)}  //  Delete two way binding
          // value={title}
          type="text"
          placeholder="Takes"
          // name=""
          // id=""
        className="p-2 border-b w-full text-2xl font-thin outline-0"/>

        
        {/* { errors && errors.title && errors.title.message && <small> {errors.title.message}
</small> } */}
        <small className="font-thin text-red-400"> {errors?.title?.message} </small>

        <button className="mt-5 text-xl px-10 py-2 border rounded" >Create</button>
      </form>
    </div>
  )
}

export default Create
