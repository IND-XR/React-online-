import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import Create from "./Create";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { nanoid } from 'nanoid'
import { toast } from "react-toastify";
// import fav from "./Fav";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  // console.log(data, params.id)
  const recipe = data.findIndex((recipe) => params.id == recipe.id);
  // console.log(recipe)

  const {
    register, // use for two way  binding
    handleSubmit, // is used for submission
    // reset,           // from ko reset karne ke liye
    formState: { errors }, // for finding error sab error yah mileange
  } = useForm({
    defaultValues: {
      title: recipe?.title, //  title: recipe?.titile,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst,
      desc: recipe?.desc,
      inger: recipe?.inger,
    },
  });

  const UpdateHandler = (recipe) => {
    //Updateing
    const index = data.findIndex((recipe) => (params.id = recipe.id)); // find frist id
    const copydata = [...data];

    copydata[index] = { ...copydata[index], ...recipe };
    // console.log( copydata[index])
    setdata(copydata);

    localStorage.setItem("recipes", JSON.stringify(copydata)); //jabhi ham ko data ok convert jarna hota hai jsob to string ham yah use karte hai

    toast.success("recipe update");
  };

  // const {data} = useContext(recipecontext);

  // const params =  useParams();
  // // console.log(data, params.id)

  // const recipe = data.find(recipe => params.id = recipe.id)
  // // console.log(recipe)

  const DeleteHander = () => {
    const filerdata = data.filter((r) => r.id !== params.id);
    setdata(filerdata);

    localStorage.setItem("recipes", JSON.stringify(filerdata)); //jabhi ham ko data ok convert jarna hota hai jsob to string ham yah use karte hai

    toast.success("recipe Deletes");
    navigate("/recipes");
  };

  //  useEffect(()=>{
  //     console.log("SingleRecipe.jsx Mounted");

  //     return ( ) =>{
  //       console.log("SingleRecipe.jsx UnMounted")
  //     }
  //   },[])  // [] square brackets bewajah update ko rok ta hai

  // ***************************************************************

  const [favroite, setfavorite] = useState(() => {
  try {
    JSON.parse(localStorage.getItem("fav")) || []
    const stored = localStorage.getItem("fav");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
});

  const FavHandler = () => {
    // let copyfav = [...favroite];
    // copyfav.puch(recipe);
    // setfavorite(copyfav);
    // localStorage.setItem("fav",JSON.stringify(copyfav));
  if (Array.isArray(favroite) && favroite.some((f) => f.id === recipe?.id)) return;

  const updatedFav = [...(Array.isArray(favroite) ? favroite : []), recipe];
  setfavorite(updatedFav);
  localStorage.setItem("fav", JSON.stringify(updatedFav));
  console.log("hello like");
};

const UnFavHandler = () => {
    const updatedFav = favroite.filter((f) => f.id !== recipe?.id);
    setfavorite(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    console.log("hello unlike");
};
  
  // useEffect(()=>{
  //   console.log("singkeRecipe.jsx mounted");
  //   return()=>{
  //     console.log("singlerecipe.jsx UnMount")
  //   }
  // },[favroite])  // matlab favorite main kaam hota hai tab kaam hona chiye

  return recipe ? (
    <div className="w-full flex">
      <div className="relative left w-1/2 p-10">
        {Array.isArray(favroite) && favroite.find((r) => r.id === recipe.id) ? ( // favroite.find((r) => r.id === recipe.id) ?  ( // find(recipe)
          <i
            onClick={UnFavHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"
          ></i>
        )}

        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img
          className="h-[20vh]"
          src={
            recipe.image && (
              <img className="h-[20vh]" src={recipe.image} alt={recipe.title} />
            )
          }
          alt=""
        />
        <h1>{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>

      {/* < className='right  w-1/2 p-2'>  */}
      <form
        className="w-1/2 right p-2"
        action=""
        onSubmit={handleSubmit(UpdateHandler)}
      >
        {/* //image */}
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          // value={recipe.image}
          type="url"
          placeholder="enter image URL"
        />

        {/* <small className='text-red-400'> This how the </small> */}
        <small className=" font-thin text-red-400">
          {" "}
          {errors?.title?.message} This how the error show{" "}
        </small>

        {/* // title */}

        <input
          className="block border-b outline-0 p-2"
          {...register("titile")}
          // value={recipe.titile}
          type="text"
          placeholder="Recipe Title"
        />

        <small className="text-red-400"> This how the </small>

        {/* // chef */}

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          // value={recipe.chef}
          type="text"
          placeholder=" chef naam"
        />

        <small className="text-red-400"> This how the </small>

        {/* // description */}

        <input
          className="block border-b outline-0 p-2"
          {...register("desc")}
          // value={recipe.desc}
          type="text"
          placeholder=" Strart from here"
        />

        <small className="text-red-400"> This how the </small>

        {/* // description */}

        <textarea
          name=""
          id=""
          className="block border-b outline-0 p-2"
          {...register(" inger")}
          // value={recipe.inger}
          placeholder="// Write ingredients seperated by Comma "
        ></textarea>

        <small className="text-red-400"> This how the </small>

        {/* // insturctions */}
        <textarea
          name=""
          id=""
          className="block border-b outline-0 p-2"
          {...register("inst")}
          // value={recipe.inst}
          placeholder="// Write instructions seperated by Comma "
        ></textarea>

        <small className="text-red-400"> This how the </small>

        {/* // description */}

        <select
          name=""
          id=""
          className="block border-b outline-0 p-2"
          {...register("description")}
          placeholder="// Write ingredients seperated by Comma "
        >
          <option value="breakfast"> Breakfast </option>
          <option value="lunch"> Lunch </option>
          <option value="supper"> Supper </option>
          <option value="dinner"> Dinner </option>
        </select>

        <button className="mt-5 block bg-blue-900 px py-2 rounded ">
          {" "}
          Update Recipe{" "}
        </button>
        <button
          className="mt-5 block bg-red-900 px py-2 rounded "
          onClick={() => {
            DeleteHander();
          }}
        >
          {" "}
          Delete Recipe{" "}
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;

//  recipe.id = nanoid();
//         console.log(recipe);

//       const copydata = [...(data || [])];
//       copydata.push(recipe);
//       setdata(copydata);

//       toast.success("New recipe created")
//       // setdata([...data,recipe]) // wite in one line
//       // console.log(data);
// reset()
// navigate("/recipes")

//     return recipe ? (
// <div className="w-full flex">
//   <div className="relative left w-1/2 p-10">
//     {favorite.find(fav => fav.id === recipe.id) ? (
//       <i
//         onClick={UnFavHandler}
//         className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"
//       ></i>
//     ) : (
//       <i
//         onClick={FavHandler}
//         className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"
//       ></i>
//     )}
