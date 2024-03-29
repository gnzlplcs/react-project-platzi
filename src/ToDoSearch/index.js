import React from "react";
import './ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue, loading }) {
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
      disabled={loading}
    />
  );
}

export { ToDoSearch };