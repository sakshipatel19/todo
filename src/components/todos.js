import React from "react";
import Todo from "./todo";
const Todos = (props) => {
  let todo = props.todos.map((todo,index) =>{
    return <Todo todo={todo} key={todo.id} toggleStatus={(event)=>props.handleToggleStatus(index,event)} delete={(event)=>props.handleDelete(index,event)}/>
  })
  return todo;
}

export default Todos;
