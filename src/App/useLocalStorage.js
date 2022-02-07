import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [ state, dispatch ] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    error,
    synchronizedItem,
    loading,
    item
  } = state;

  // const [ error, setError ] = React.useState(false);
  // const [ synchronizedItem, setSynchronizedItem ] = React.useState(true);
  // const [ loading, setLoading ] = React.useState(true);
  // const [ item, setItem ] = React.useState(initialValue);

  // action creators
  const onError = (error) => dispatch({
    type: actionTypes.error,
    payload: error
  });

  const onSuccess = (parsedItem) => dispatch({
    type: actionTypes.success,
    payload: parsedItem
  });

  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item,
  });

  const onSyncronize = () => dispatch({ type: actionTypes.syncronized });

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

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      };
    }, 1000);
  }, [synchronizedItem]);

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const syncronizeItem = () => {
    onSyncronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    syncronizeItem
  };
};

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  syncronized: 'SYNCRONIZED',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.syncronized]: {
    ...state,
    loading: true,
    synchronizedItem: false,
  }
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

const initialState = ({ initialValue }) => ({
  error: false,
  synchronizedItem: true,
  loading: true,
  item: initialValue,
});

export { useLocalStorage };