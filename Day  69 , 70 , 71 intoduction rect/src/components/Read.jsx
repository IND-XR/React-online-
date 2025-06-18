import React from 'react'
import style from "./Read.module.css"

const Read = (props) => {

  console.log(style)
    const todos = props.todos
    const settodos = props.settodos

    const DeleteHandler = (id) =>{
      const filtedtodo = todos.filter((todos) => todos.id != id)
      settodos(filtedtodo)
      console.log(id)
    }


    const rendertodos = todos.map((todo) =>{


    return(
      <li key={todo.id} className=' mb-2 flex justify-between items-center p-3 bg-gray-900'  >
        <span className="text-xl font-thin"> • {todo.title} </span>
        <button className=" text-red-400 text-sm  " onClick={ () => DeleteHandler(todo.id) } > &nbsp; &nbsp; Delete </button>
      </li>
    );
  });

  
  //javas...

  // const x = { color: "pink"};

  return (
    <div className="w-[40%] p-10">
      <hr />
      <h1 className="mb-10 text-5xl font-thin"> <span className='text-orange-400' >Pending</span>Todos</h1>
      <ol> {rendertodos} </ol>
      
    </div>
  )
}

export default Read ;
