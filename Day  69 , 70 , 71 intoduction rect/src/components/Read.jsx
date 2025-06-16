import React from 'react'

const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const DeleteHandler = (id) =>{
      const filtedtodo = todos.filter((todos) => todos.id != id)
      settodos(filtedtodo)
      console.log(id)

    }




    const rendertodos = todos.map((todo) =>{
    return(
      <li style={{color:todo.isCompleted ? "green" : "tomato"}} key={todo.id}>
        <p> title :{todo.title} | <span onClick={ () => DeleteHandler(todo.id)} > Delete </span> </p>
      </li>
    );
  });

    
    //javas...
  return (
    <div>
      <hr />
      <h1 style={{color :"tomato"}}>Pending Todos</h1>
      <ol> {rendertodos} </ol>
      
    </div>
  )
}

export default Read ;
