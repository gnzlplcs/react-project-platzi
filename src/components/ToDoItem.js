import React from "react";
import '../css/ToDoItem.css'

function ToDoItem(props) {
  const onComplete = () => alert(`Completaste el to-do ${props.text}`);

  const onDelete = () => alert(`Eliminaste el to-do ${props.text}`);

  return (
    <li className="toDoItem">
      <span
        className={`icon icon-check ${props.completed && 'icon-check--active'}`}
        onClick={onComplete}
      >C</span>
      <p className={`toDoItem-p ${props.completed && 'toDoItem-p--complete'}`}>{props.text}</p>
      <span
        className="icon icon-delete"
        onClick={onDelete}
      >X</span>
    </li>
  );
}

export { ToDoItem };