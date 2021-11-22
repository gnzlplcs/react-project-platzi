import React from "react";
import '../css/ToDoItem.css'

function ToDoItem(props) {
  return (
    <li className="toDoItem">
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>C</span>
      <p className={`toDoItem-p ${props.completed && 'toDoItem-p--complete'}`}>{props.text}</p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { ToDoItem };