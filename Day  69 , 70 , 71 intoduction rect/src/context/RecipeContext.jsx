import React, { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([
    // { id: 1, titile: "Kam Krle bahi", isCompleted: false },
  ]);
  // console.log(props)
  console.log(data);

  return (
    <recipecontext.Provider value={{data, setdata}}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
