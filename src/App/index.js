// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const defaultToDos = [{
    text: 'Tomar curso de Linux',
    completed: false
  },
  {
    text: 'Tomar curso de React',
    completed: true
  },
  {
    text: 'Sacar a Wanda',
    completed: false
  },
  {
    text: 'Comprar gaseosa',
    completed: false
  },
];

function App() {
  const [ toDos, setToDos ] = React.useState(defaultToDos);
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
    setToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [ ...toDos]; // se crea una nueva lista de to-dos para no crashear el estado inicial
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
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