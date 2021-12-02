import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const onCLickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <button
      className="createToDoButton"
      onClick={onCLickButton}
    >+</button>
  )
}

export { CreateToDoButton };