import React, { createContext ,useState } from 'react'

export const todocontent = createContext(null);

const Wrapper = (props) => {
    console.log(props);

    const [todos, settodos] = useState([
    {id : 1 , title:" chal kam kar" , isCompleted:false},
  ])

   const [gender, setgenter] = useState("male")
  console.log(gender)



  return (
    <todocontent.Provider value={ [todos, settodos]   } > {props.children} </todocontent.Provider>
  )
}
// "hello from HOC Content"
export default Wrapper
