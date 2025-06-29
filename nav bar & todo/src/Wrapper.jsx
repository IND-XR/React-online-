import React, { createContext ,useState } from 'react'

export const todocontent = createContext(null);   {/* 3 step :   */}

const Wrapper = (props) => {
  const [todos, settodos] = useState([

    { id: 1, title: "Kam Krle bahi", isCompleted: false },   {/* 4 step :  Createing / Adding a universal Data  in Wrapper.jsx   */}

  ]);
    console.log(props); 
  return ( 
     <todocontent.Provider value={ [todos, settodos]} >    {/* 5 step : rap todoContent that pass  todos, settodos   */}
       {props.children}  {/* 2 step :  it come from main.jsx  from props   */}
      </todocontent.Provider>

    // <div>hello
    //   {props.children}
    // </div>
    // <>
    
    // {props.App}
    // </>
    
  )
};

export default Wrapper;
