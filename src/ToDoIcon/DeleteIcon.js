import React from 'react';
import { ToDoIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
