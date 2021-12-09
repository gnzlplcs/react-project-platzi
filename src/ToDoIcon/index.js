import React from 'react';
import { ReactComponent as CheckSVG } from './bxs-check-circle.svg';
import { ReactComponent as DeleteSVG } from './bxs-x-circle.svg';
import './ToDoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function ToDoIcon({ type, color="gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { ToDoIcon };