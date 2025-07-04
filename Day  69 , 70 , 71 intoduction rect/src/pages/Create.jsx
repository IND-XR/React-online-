import React, {useContext}from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import { recipecontext } from '../context/RecipeContext';

const Create = () => {
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

    // setdata([...data,recipe]) // wite in one line



    // console.log(data);




    reset()
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
        {...register("description")}
        type="text"
        placeholder=' Strart from here' />

      <small className='text-red-400'> This how the </small>



{/* // description */}

      <textarea name="" id=""
        className='block border-b outline-0 p-2'
        {...register("description")}
        placeholder='// Write ingredients seperated by Comma '>
      </textarea>
              
      <small className='text-red-400'> This how the </small>

{/* // insturctions */}
      <textarea name="" id=""
        className='block border-b outline-0 p-2'
        {...register("insturctions")}
        placeholder='// Write instructions seperated by Comma '>
      </textarea>
              
      <small className='text-red-400'> This how the </small>

{/* // description */}

      <select name="" id=""
        className='block border-b outline-0 p-2'
        {...register("description")}
        placeholder='// Write ingredients seperated by Comma '>
          <option value="cat-1">Category 1 </option>
          <option value="cat-2">Category 2 </option>
          <option value="cat-3">Category 3 </option>

      </select>


      <button className='mt-5 block bg-gray-900 px py-2 rounded ' > Save Recipe </button>


    </form>

  )
}

export default Create