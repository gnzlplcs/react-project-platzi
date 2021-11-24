import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const onCLickButton = (msg) => alert(msg);

  return (
    <button
      className="createToDoButton"
      onClick={() => onCLickButton('alert message')}
    >+</button>
  )
}

export { CreateToDoButton };