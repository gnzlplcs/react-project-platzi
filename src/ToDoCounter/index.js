import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({ total, completed }) {

  return (
    <h2 className='toDoCounter'>Has completado {completed} de {total} ToDo's</h2>
  )
}

export { ToDoCounter };