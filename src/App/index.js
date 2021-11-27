// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {
  // creando todos en el local storage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [ item, setItem ] = React.useState(parsedItem);

  const saveItem = newItem => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
};

function App() {
  const [ toDos, saveToDos ] = useLocalStorage('TODOS_V1', []);

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
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;