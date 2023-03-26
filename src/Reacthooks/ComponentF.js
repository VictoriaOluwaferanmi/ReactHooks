import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentF = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      ComponentF
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

export default ComponentF;
