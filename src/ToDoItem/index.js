import React from "react";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import './ToDoItem.css'

function ToDoItem(props) {
  return (
    <li className="toDoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`toDoItem-p ${props.completed && 'toDoItem-p--complete'}`}>{props.text}</p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { ToDoItem };