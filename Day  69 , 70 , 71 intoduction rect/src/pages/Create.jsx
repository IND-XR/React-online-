import React, {useContext}from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import { recipecontext } from '../context/RecipeContext';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  
  const navigate  = useNavigate();
  const {data, setdata } = useContext(recipecontext)

  const {
    register,  // use for two way  binding
    handleSubmit,  // is used for submission
    reset,  // from ko reset karne ke liye
    formState: { errors }, // for finding error sab error yah mileange
  } = useForm();


  const SubmitHandler = (recipe) => {
    
    recipe.id = nanoid();
     console.log(recipe);

   
    const copydata = [...(data || [])];
    copydata.push(recipe);
    setdata(copydata);

    localStorage.setItem("recipes",JSON.stringify(copydata));  //jabhi ham ko data ok convert jarna hota hai jsob to string ham yah use karte hai 


    // setdata([...data,recipe]) // wite in one line

    toast.success("New recipe created")



    // console.log(data);

    reset()
    navigate("/recipes")
  }

  return (
    <form action="" onSubmit={handleSubmit(SubmitHandler)}>

{/* //image */}

      <input className='block border-b outline-0 p-2'
        {...register("image")}
        type="url"
        placeholder='enter image URL' />
        

      {/* <small className='text-red-400'> This how the </small> */}
      <small className=' font-thin text-red-400'> {errors?.title?.message} This how the error show </small>


{/* // title */}

      <input className='block border-b outline-0 p-2'
        {...register("titile")}
        type="text"
        placeholder='Recipe Title' />

      <small className='text-red-400'> This how the </small>

{/* // chef */}

      <input className='block border-b outline-0 p-2'
        {...register("chef")}
        type="text"
        placeholder=' chef naam' />

      <small className='text-red-400'> This how the </small>


{/* // description */}

      <input className='block border-b outline-0 p-2'
        {...register("desc")}
        type="text"
        placeholder=' Strart from here' />

      <small className='text-red-400'> This how the </small>



{/* // description */}

      <textarea name="" id=""
        className='block border-b outline-0 p-2'
        {...register(" inger")}
        placeholder='// Write ingredients seperated by Comma '>
      </textarea>
              
      <small className='text-red-400'> This how the </small>

{/* // insturctions */}
      <textarea name="" id=""
        className='block border-b outline-0 p-2'
        {...register("inst")}
        placeholder='// Write instructions seperated by Comma '>
      </textarea>
              
      <small className='text-red-400'> This how the </small>

{/* // description */}

      <select name="" id=""
        className='block border-b outline-0 p-2'
        {...register("description")}
        placeholder='// Write ingredients seperated by Comma '>
          <option value="breakfast"> Breakfast </option>
          <option value="lunch"> Lunch </option>
          <option value="supper"> Supper </option>
          <option value="dinner"> Dinner </option>


      </select>


      <button className='mt-5 block bg-gray-900 px py-2 rounded ' > Save Recipe </button>


    </form>

  )
}

export default Create