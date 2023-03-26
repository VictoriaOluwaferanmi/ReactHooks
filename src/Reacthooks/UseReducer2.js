import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};
const UseReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count.firstCounter}</div>
      <div>{count.secondCounter}</div>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment2", value: 5 });
        }}
      >
        Incrementbtn2
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement2", value: 5 });
        }}
      >
        decrementbtn2
      </button>
    </div>
  );
};

export default UseReducer2;
