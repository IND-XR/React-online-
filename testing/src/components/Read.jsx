import React from 'react'
// import { Fragment ,useState } from "react";

const Read = (props) =>{
  const todos = props.todos
  const settodos = props.settodos

  
  const deletehandlar = (id) =>{
    const filtedtods = todos.filter((todos)=>todos.id != id)
    settodos(filtedtods)
    console.log(id)
  }

  console.log(todos)

  const rendertodos = todos.map((todo)=>{
    return(
      <li key={todo.id}>
        <p>title:{todo.title} || <span onClick={ () => deletehandlar(todo.id)} > Delete </span> </p>
      </li>
    )
  })
 

  //javas...
  return (
    <div>
      <hr />
      <h1> Peading Todos </h1>

      <ol>{rendertodos}</ol>

      <br />
      <br />
      <hr />
    </div>
  )
}

export default Read



































// import { useState } from "react"

// const Read = () => {
  // const users = props.users


  // const [username ,setUsername] = useState("sarthak");

  // const changeHandler =()=>{
  //   setUsername("Ankur")
  // }
  // console.log(username)

  // const renderuser = users.map((user, index) => {
  //   return(
  //   <li key={index}>
  //     <p> name:{user.name} age:{user.age}</p>
  //   </li>
  // )
  // })
// javas..
//   return (
    
//     <div>
//       <hr />
//       <h1>User</h1>
//       {/* <ol>{renderuser}</ol> */}
//       {/* <h1>{username}</h1> */}
//       {/* <button onClick={changeHandler}>checkname</button> */}

//     </div>
//   )
// }

// export default Read
