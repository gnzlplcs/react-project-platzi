// import './App.css';
import React from 'react';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton';

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

  if (searchValue.length == 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <ToDoCounter
        total={totalToDos}
        completed={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedToDos.map(todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;