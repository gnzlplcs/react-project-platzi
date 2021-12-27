import React from 'react';

function useStorageListener(syncronize){
  const [ storageChange, setStorageChange ] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log("Hubo cambios en TODO_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    syncronize();
    setStorageChange(false);
  }

  return {
    show: storageChange,
    toggleShow
  }
}

export { useStorageListener };
