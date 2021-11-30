import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue ] = React.useState('');

  const completedToDos = toDos.filter(todo => todo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (searchValue.length === 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [ ...toDos]; // se crea una nueva lista de to-dos para no crashear el estado inicial
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [ ...toDos]; // se crea una nueva lista de to-dos para no crashear el estado inicial
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <ToDoContext.Provider value={{
      loading,
      error,
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDo,
      deleteToDo,
    }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };