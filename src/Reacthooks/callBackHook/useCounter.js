import { useState } from "react";
//using Custom hooks instead of repeating the same code for components
//reusable logic
//we return an array of values, count, inc, dec, and reset
const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
};
export default useCounter;
