import React from "react";
import useCounter from "./useCounter";

const CustomHooksComponent2 = () => {
  const [count, increment, decrement, reset] = useCounter(0, 3);
  return (
    <div>
      CustomHooksComponent2
      <div>
        <p>CustomHook2- {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CustomHooksComponent2;
