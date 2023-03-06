import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>code-next-react-counter</h1>

      <hr />

      <div>
        <div>Count: {count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
};
