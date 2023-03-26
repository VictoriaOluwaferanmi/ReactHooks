import React, { useContext } from "react";
import { CountContext } from "../App";
//RefandContext
const ComponentA = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component A
      <button
        type="button"
        onClick={() => {
          countContext.CountDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          countContext.CountDispatch("reset");
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          countContext.CountDispatch("increment");
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default ComponentA;
