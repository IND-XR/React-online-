import { useState } from "react"

const Read = (props) => {
    const users = props.users;
    const setusers = props.setusers;

    console.log(props)

    const renderuser = users.map(( user ,index) =>{
     return(
      <li key={index}> 
        <p>name :{user.name}</p>
      </li>
     )
  })

   // javas..
  
  return (
    <div>
      <hr />
      <h1> User </h1>
      <ol>{renderuser}</ol>
    </div>
  )
}

export default Read
