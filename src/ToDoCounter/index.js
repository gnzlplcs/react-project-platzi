import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({ totalToDos, completedToDos, loading }) {
  return (
    <h2 className={`toDoCounter ${loading && "toDoCounter--loading"}`}>Has completado {completedToDos} de {totalToDos} ToDo's</h2>
  )
}

export { ToDoCounter };