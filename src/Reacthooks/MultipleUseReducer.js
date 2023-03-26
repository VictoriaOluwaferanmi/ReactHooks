import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};
const MultipleUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <p>MultipleUseReducer</p>
      <div>{count}</div>

      <button
        type="button"
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>

      <div>{countTwo}</div>

      <button
        type="button"
        onClick={() => {
          dispatchTwo("decrement");
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          dispatchTwo("increment");
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default MultipleUseReducer;
