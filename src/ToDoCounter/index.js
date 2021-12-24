import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({ totalToDos, completedToDos }) {
  return (
    <h2 className='toDoCounter'>Has completado {completedToDos} de {totalToDos} ToDo's</h2>
  )
}

export { ToDoCounter };