import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
  const onCLickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="createToDoButton"
      onClick={onCLickButton}
    >+</button>
  )
}

export { CreateToDoButton };