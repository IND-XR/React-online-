import React from "react";
import { Link } from 'react-router-dom'


const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link 
      to={`/Recipes/details/${id}`} className=" duration-150 hover:scale-105 block w-[23vw] rounded overflow-hidden shadow p-1">

      <img className="object-cover w-full h-[20vh]"  src={image} alt="" />
      <h1 className=" px-2 mt-2 font-black">{title}</h1>
      <small className=" px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0,100)}...{""} 
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
