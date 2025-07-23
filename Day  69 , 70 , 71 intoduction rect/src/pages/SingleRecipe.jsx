import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import Create from "./Create";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { nanoid } from 'nanoid'
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);

  const navigate = useNavigate();
  const params = useParams();
  // console.log(data, params.id)

  const recipe = data.find((recipe) => (params.id = recipe.id));
  // console.log(recipe)

  const {
    register, // use for two way  binding
    handleSubmit, // is used for submission
    // reset,    // from ko reset karne ke liye
    formState: { errors }, // for finding error sab error yah mileange
  } = useForm({
    defaultValues: {
      title: recipe?.titile,
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

    localStorage.setItem("recipes",JSON.stringify(copydata));  //jabhi ham ko data ok convert jarna hota hai jsob to string ham yah use karte hai 

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

    localStorage.setItem("recipes",JSON.stringify(filerdata));  //jabhi ham ko data ok convert jarna hota hai jsob to string ham yah use karte hai 

    toast.success("recipe Deletes");
    navigate("/recipes");
  };

  //  useEffect(()=>{
  //     console.log("SingleRecipe.jsx Mounted");

  //     return ( ) =>{
  //       console.log("SingleRecipe.jsx UnMounted")
  //     }
  //   },[])  // [] square brackets bewajah update ko rok ta hai 



  // const favorite = JSON.parse(localStorage.getItem("fav")) || []; // Checkin if local storage 
const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const FavHandler = () => {
  favorite.push(recipe);
  localStorage.setItem("fav", JSON.stringify(favorite));
    //   //  favroite.push(recipe);
  //   //  localStorage.setItem("fav", JSON.stringify(favroite)); // Checkin if local storage 
};

  const UnFavHandler = () =>{ 
  //    const updatedFavs = favorite.filter(fav => fav.id !== recipe.id);
  // localStorage.setItem("fav", JSON.stringify(updatedFavs));
    // const updatedFavs = favroite.filter(fav => fav.id !== recipe.id);
    // localStorage.setItem("fav", JSON.stringify(updatedFavs));

  };


  return recipe ? (
    <div className="w-full flex">
     
      <div className="relative left w-1/2 p-10">
      {favorite.find (fav => fav.id === recipe.id) ? (
        <i onClick={UnFavHandler} className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"></i>
       ) : ( <i onClick={FavHandler} className=" right-[5%] absolute text-3xl text-red-400 ri-heart-line"></i>)
 
 }

        <h1 className="text-5xl font-black">{recipe.titile}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
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