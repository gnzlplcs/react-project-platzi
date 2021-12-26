import React from 'react';

function ToDoHeader({ children, loading }) {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { ToDoHeader };