import React, { useState } from "react";

const TheUseStateHook = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementby2 = () => {
    for (let i = 0; i < 2; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>
      <button onClick={incrementby2}>IncrementBy2 </button>
    </div>
  );
};

export default TheUseStateHook;
