import React, { useContext } from "react";
// import { datacontext} from '../context/RecipeContext'
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.titile}</h1>
    </div>
  ));

  return <div>{renderrecipes}</div>;
};

export default Recipes;
