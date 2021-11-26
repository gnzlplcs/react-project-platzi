// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

// const defaultToDos = [{
//     text: 'Tomar curso de Linux',
//     completed: false
//   },
//   {
//     text: 'Tomar curso de React',
//     completed: true
//   },
//   {
//     text: 'Sacar a Wanda',
//     completed: false
//   },
//   {
//     text: 'Comprar gaseosa',
//     completed: false
//   },
// ];

function App() {
  // creando todos en el local storage
  const localStorageToDos = localStorage.getItem('TODOS_V1', );
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem('TODOS_V1', '[]');
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [ toDos, setToDos ] = React.useState(parsedToDos);
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

  const saveToDos = newToDos => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('TODOS_V1', stringifiedToDos);
    setToDos(newToDos);
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