import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (

    <div className="btn btn-outline-secondary d-inline-flex align-items-center rounded-pill">

      <button
        className="btn"
        onClick={decrement}
      >
        <AiOutlineMinus size={20} />
      </button>
      <h1 className="text-success fs-5 mt-1">{count}</h1>
      <button
        className="btn"
        onClick={increment}
      >
        <AiOutlinePlus size={20} />
      </button>
    </div>
  );
};


export default Counter;
