import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [ error, setError ] = React.useState(false);
  const [ synchronizedItem, setSynchronizedItem ] = React.useState(true);
  const [ loading, setLoading ] = React.useState(true);
  const [ item, setItem ] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {// creando todos en el local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true)
      } catch (error) {
        setError(error);
      };
    }, 1000);
  }, [synchronizedItem]);

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const syncronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    syncronizeItem
  };
};

export { useLocalStorage };