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

  const completeHandlar=(id)=>{
    const update = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo;
    })
    settodos(update)
    }
  


  const rendertodos = todos.map((todo)=>{
   return(
      <li key={todo.id}>
        <span style = {{ textDecoration : todo.isCompleted ? "underline" : "none", color:todo.isCompleted ? "gray" : "red" } } > • {todo.title} </span>
        <button onClick={()=>deletehandlar(todo.id)}>     Delete </button>
        <button onClick={()=>completeHandlar(todo.id)}> Complete </button>      
      </li>
    )
  })
 

  //javas...
  return (
    <div className="w-[40%] p-10" >
      <hr />
      <h1 className="mb-10 text-5xl font-thin" >
         <span className="text-orange-400">Pending</span>Todos </h1>

      <ol>{rendertodos}</ol>

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
