import React, { createContext } from 'react'

export const todocontent = createContext(null);

const Wrapper = (props) => {
    console.log(props);
  return ( 
     <todocontent.Provider value={"hello from HOC Content"} > {props.children} </todocontent.Provider>

    // <div>hello
    //   {props.children}
    // </div>
    // <>
    
    // {props.App}
    // </>
    
  )
};

export default Wrapper;
