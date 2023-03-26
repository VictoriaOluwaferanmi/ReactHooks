/* eslint-disable react/jsx-pascal-case */
// { useReducer }
import React from "react";
import "./App.css";
import CustomHooksComponent1 from "./Reacthooks/callBackHook/CustomHookComponent1";
import CustomHooksComponent2 from "./Reacthooks/callBackHook/CustomHooksComponent2";
import UserForm from "./Reacthooks/callBackHook/UserForm";
//import MemoHook from "./Reacthooks/callBackHook/MemoHook";
//import ComponentA from "./Reacthooks/ComponentA";
//import ComponentB from "./Reacthooks/ComponentB";
//import ComponentC from "./Reacthooks/ComponentC";
import MultipleUseReducer from "./Reacthooks/MultipleUseReducer";
import TheUseStateHook from "./Reacthooks/TheUseStateHook";
import UseContextComponentA from "./Reacthooks/UseContextComponentA";
import UseEffect from "./Reacthooks/UseEffect";
import UseEffectFetchingData from "./Reacthooks/UseEffectFetchingData";
//import UseEffectFetchingData2 from "./Reacthooks/UseEffectFetchingData2";
import UseEfffectTwo from "./Reacthooks/UseEfffectTwo";
import UseReducer from "./Reacthooks/UseReducer";
import UseReducer2 from "./Reacthooks/UseReducer2";
import UseReducerForDataFetching from "./Reacthooks/UseReducerForDataFetching";
import UseRefHook from "./Reacthooks/UseRefHook";
import UseRefTimerHook from "./Reacthooks/UseRefTimerHook";
import UseStateArray from "./Reacthooks/UseStateArray";
import UseStateObj from "./Reacthooks/UseStateObj";

//export const CountContext = React.createContext();
export const UserContext = React.createContext();
export const IndigenContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// };

function App() {
  //  const [count, dispatch] = useReducer[(reducer, initialState)];

  return (
    <div className="App">
      <CustomHooksComponent1 />
      <CustomHooksComponent2 />
      <UseRefHook />
      <UseRefTimerHook />
      <UseReducerForDataFetching />
      <TheUseStateHook />
      <UseStateObj />
      <UseStateArray />
      <UseEffect />
      <UseEfffectTwo />
      <UseEffectFetchingData />
      <UserContext.Provider value={"VictoriaOluwaferanmi"}>
        <IndigenContext.Provider value={"Oyo"}>
          <UseContextComponentA />
        </IndigenContext.Provider>
      </UserContext.Provider>
      <UseReducer />
      <UseReducer2 />
      <MultipleUseReducer />
      <UserForm />

      {/*  <p>UseReducer and UseContext</p>
      <div> Count-{count}</div>

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
  */}
    </div>
  );
}

export default App;
