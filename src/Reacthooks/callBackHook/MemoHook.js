import React, { useState, useMemo } from "react";

const MemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const Even = useMemo(() => {
    let i = 0;
    while (i < 2000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <h1>Using MemoHook</h1>
        <button onClick={IncrementOne}> Counter-One {counterOne}-</button>
        <span>{Even() ? "Even" : "odd"}</span>
      </div>
      <div>
        {" "}
        <button onClick={IncrementTwo}>Count-Two {counterTwo}</button>
      </div>
    </div>
  );
};

export default MemoHook;
