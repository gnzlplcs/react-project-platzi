// import './App.css';
import React from 'react';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton';

const toDos = [{
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

function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDos.map(todo => (
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