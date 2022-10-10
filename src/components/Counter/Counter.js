import React, { useState } from "react";
import "./Counter.css";
export default function Counter() {
  const [count, setCount] = useState(5);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter-container">
      <button onClick={decrementCount} className="button-counter">
        -
      </button>
      <h1>{count}</h1>
      <button onClick={incrementCount} className="button-counter">
        +
      </button>
    </div>
  );
}
