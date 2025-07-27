import React, { useContext } from "react";
// import { datacontext} from '../context/RecipeContext'
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")  || []);

  const renderrecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  //java
  return (
    <div className="flex flex-wrap">
      {favorite.lenght > 0 ? renderrecipes : "No favorite found!"}
    </div>
  );
};

export default Fav;

// import React, { useContext } from "react";
// // import { datacontext} from '../context/RecipeContext'
// import { recipecontext } from "../context/RecipeContext";
// import RecipeCard from "../Components/RecipeCard";

// const Fav = () => {
//   const favorite = JSON.parse(localStorage.getItem("fav") ) || [];

//   const renderrecipes = favorite.map((recipe) => (
//     <RecipeCard key={recipe.id} recipe={recipe} />
//   ));

//   //java
//   return (
//     <div className="flex flex-wrap">
//       {favorite.lenght > 0 ? renderrecipes : "No favorite found!"}
//     </div>
//   );
// };

// export default Fav;
