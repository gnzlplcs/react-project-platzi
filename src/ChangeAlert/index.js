import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ syncronize }) {
  const { show, toggleShow } = useStorageListener(syncronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que hubo cambios desde otra pestaña o ventana</p>
          <p>¿Quieres actualizar esta pestaña?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>

      </div>
    )
  } else {
    return null;
  }
}


export { ChangeAlert };
