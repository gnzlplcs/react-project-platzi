import React from "react";
import '../css/ToDoSearch.css'

function ToDoSearch() {
  const [ searchValue, setSearchValue ] = React.useState('');

  const onChangeValueSearch = (event) => {
    setSearchValue(event.target.value);
  }

  return [
    <input
      className="toDoSearch"
      placeholder="Add a to-do"
      value={searchValue}
      onChange={onChangeValueSearch}
    />,
    <p>{searchValue}</p>
  ];
}

export { ToDoSearch };