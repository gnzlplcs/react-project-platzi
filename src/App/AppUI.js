import React from "react";
import { ToDoContext } from '../ToDoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';


function AppUI() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo
  } = React.useContext(ToDoContext);

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Parece que algo salió mal.</p>}
        {loading && <p>Cargando... espera un toque</p>}
        {(!loading && !searchedToDos.length) && <p>¡Listo! Crea tu primer to-do.</p>}
        {searchedToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export { AppUI };