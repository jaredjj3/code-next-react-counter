import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div class="container">
      <h1>code-next-react-counter</h1>

      <hr />

      <div>Count: {count}</div>

      <div class="btn-group">
        <button class="btn btn-primary" onClick={increment}>
          increment
        </button>
        <button class="btn btn-primary" onClick={decrement}>
          decrement
        </button>
      </div>
    </div>
  );
};
