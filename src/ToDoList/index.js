import React from "react";
import './ToDoList.css';

function ToDoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="ToDoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalToDos) && props.onEmptyToDos()}
      {(!!props.totalToDos && !props.searchedToDos.length) && props.onEmptySearchResults(props.searchText)}
      {props.searchedToDos.map(renderFunc)}
      <ul>{props.children}</ul>
    </section>
  );
}

export { ToDoList };