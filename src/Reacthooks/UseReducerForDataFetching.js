import React, { useReducer, useEffect } from "react";
import axios from "axios";

//useReducer.....reducer,initial state. reducer=(state,action)=>{}
//useEffect
//axios
const initialState = {
  loading: true,
  error: " ",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return {
        loading: false,
        post: {},
        error: " ",
      };
    case "Fetch_Error":
      return {
        loading: false,
        post: action.payload,
        error: "Ko le werk o",
      };
    default:
      return state;
  }
};

const UseReducerForDataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({ type: "Fetch_Success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Fetch_Error" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loadindindin loading....." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default UseReducerForDataFetching;
