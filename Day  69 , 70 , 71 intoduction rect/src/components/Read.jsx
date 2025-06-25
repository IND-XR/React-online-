import React, { useContext } from "react";
import style from "./Read.module.css";
import { toast } from "react-toastify";
import { todocontent } from "../Wrapper";

const Read = (props) => {

  const s = useContext(todocontent);
  console.log(s)



  console.log(style);
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtedtodo = todos.filter((todos) => todos.id != id);
    settodos(filtedtodo);
    console.log(id);
    toast.error("todo is Deleted")
  };

  const completeHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted};
      }
      return todo;
    });
    toast.info("todo is completed")
    settodos(updatedTodos);
  };
  

//   const completeHandler = (id) => {
//   const updatedTodos = [];

//   for (let todo of todos) {
//     if (todo.id === id) {
//       updatedTodos.push({
//         ...todo,
//         isCompleted: !todo.isCompleted,
//       });
//     } else {
//       updatedTodos.push(todo);
//     }
//   }

//   settodos(updatedTodos);
// };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className=" mb-2 flex justify-between items-center p-3 bg-gray-900"
>
        <span
          className="text-xl font-thin" style={{ textDecoration: todo.isCompleted ? "underline" : "none", color:todo.isCompleted ? "gray" : "white" }} > • {todo.title}
        </span>

        <button className=" text-red-400 text-sm" onClick={() => DeleteHandler(todo.id)} > &nbsp; &nbsp; Delete </button> 
        <button onClick={()=>{completeHandler(todo.id)}}> Complete </button>
      </li>
    );
  });

  //javas...

  return (
    <div className="w-[40%] p-10">
      <hr />
      <h1 className="mb-10 text-5xl font-thin">
        {" "}
        <span className="text-orange-400">Pending</span>Todos
      </h1>
      <ol> {rendertodos} </ol>
    </div>
  );
};

export default Read;
