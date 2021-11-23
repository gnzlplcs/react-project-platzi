import React from "react";
import '../css/ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue }) {

  const onChangeValueSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <input
      className="toDoSearch"
      placeholder="Add a to-do"
      value={searchValue}
      onChange={onChangeValueSearch}
    />
  );
}

export { ToDoSearch };