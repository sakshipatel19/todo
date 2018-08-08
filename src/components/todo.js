import React from "react";

const deleteicon = {
  color : "#ccc",
  float : "right"
}

const Todo = (props) =>{
  let check = {
  color : "#ccc",
  float : "left"
  }
  let style={
     width : "300px",
     padding : "10px",
     border : "1px solid #ccc",
     margin : "10px auto",
     boxShadow: "4px 6px 6px 0px #ccc",
     cursor: "pointer",
     color : "#ccc",
     display : "inline-block",
     marginLeft : "10px"
   }

  props.todo.status ? ( style.color ="green" , check.color ="green" ) : ( style.color ="red" , check.color ="#ccc" );
  return(
    <div style={style} >
      <i className="fa fa-check" onClick={props.toggleStatus} style={check} />
      <i className="fa fa-trash-o" onClick={props.delete} style={deleteicon} />
      <p>{props.todo.task}</p>
    </div>
  )
}

export default Todo;
