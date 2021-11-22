import React from "react";
import '../css/ToDoSearch.css'

function ToDoSearch() {
  const onChangeValueSearch = (event) => {
    console.log(event.target.value)
  }

  return (
    <input
      className="toDoSearch"
      placeholder="Add a to-do"
      onChange={onChangeValueSearch}
    />
  )
}

export { ToDoSearch };