import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useToDos() {
  const {
    item: toDos,
    saveItem: saveToDos,
    syncronizeItem: syncronizeToDo,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [ searchValue, setSearchValue ] = React.useState('');
  const [ openModal, setOpenModal ] = React.useState(false);
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

  const addToDo = (text) => {
    const newToDos = [ ...toDos]; // se crea una nueva lista de to-dos para no crashear el estado inicial
    newToDos.push({
      completed: false,
      text,
    })
    saveToDos(newToDos);
  };

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
    {
      loading,
      error,
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      addToDo,
      completeToDo,
      deleteToDo,
      openModal,
      setOpenModal,
      syncronizeToDo
    }
  );
}

export { useToDos };