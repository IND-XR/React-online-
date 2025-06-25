import React, { createContext } from 'react'

// export const todocontent = createContext(null)
export const todocontent = createContext(null);

const Wrapper = (props) => {
    console.log(props);

  return (
    <todocontent.Provider value={"hello from HOC Content"} > {props.children} </todocontent.Provider>

    
    // <>
    // {props.App}
    
    // </>
  )
}

export default Wrapper
