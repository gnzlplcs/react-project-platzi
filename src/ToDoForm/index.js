import React from 'react';
import './ToDoForm.css'

function ToDoForm({ addToDo, setOpenModal }) {
  const [ newToDoValue, setNewToDoValue ] = React.useState('')

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo to-do</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder='Sacar a pasear a Wanda'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
