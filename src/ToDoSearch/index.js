import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoSearch.css'

function ToDoSearch() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext)
  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="toDoSearch"
      placeholder="Busca entre tus to-dos"
      value={searchValue}
      onChange={onChangeValueSearch}
    />
  );
}

export { ToDoSearch };