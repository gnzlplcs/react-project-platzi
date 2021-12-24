import React from 'react';
import { useToDos } from './useToDos';
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyToDos";
import { ToDoForm } from "../ToDoForm";
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from "../Modal";

function App() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    addToDo
  } = useToDos();

  return (
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter
          totalToDos={totalToDos}
          completedToDos={completedToDos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>
      <ToDoList
        error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        onError={() => <ToDosError />}
        onLoading={() => <ToDosLoading />}
        onEmptyToDos={() => <EmptyToDos />}
        render={todo => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        )}
      />
    
      {!!openModal && (
        <Modal>
          <ToDoForm
            addToDo={addToDo}
            setOpenModal={setOpenModal}
          ></ToDoForm>
        </Modal>
      )}
      <CreateToDoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;