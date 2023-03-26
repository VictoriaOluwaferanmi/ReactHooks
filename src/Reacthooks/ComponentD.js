import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentD = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      ComponentD
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

export default ComponentD;
