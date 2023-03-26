import React from "react";
import useCounter from "./useCounter";

const CustomHooksComponent1 = () => {
  const [count, increment, decrement, reset] = useCounter(10, 2);
  return (
    <div>
      CustomHooksComponent1
      <div>
        <p>CustomHook1- {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CustomHooksComponent1;
