
import { useState } from "react"

const Create = (props) =>  {

    console.log(props)

    const [Fullname, setfullname] = useState("");
    const [age, setage] = useState(18);

    console.log(age)
    console.log(Fullname)

    const submitHandler = (e) =>{
    e.preventDefault();
    const newuser = {Fullname , age};
    console.log(newuser) // api -backend  -database
    
    // set the user in the setusers

  }

  return (
    <div>
       <h1> Register user</h1>
       <form action="" onSubmit={submitHandler} >

        <input 
        onChange={(e) => setfullname(e.target.value)} 
        value={Fullname}
        type="text" 
        placeholder="full name" name="" id="" 
        />


        <input 
        onChange={(e) => setage(e.target.value)}
        value={age}
        type="number" 
        placeholder="Age" name="" id="" 
        />
        <button >subjmit</button>
      </form>
    </div>
  )
}

export default Create
