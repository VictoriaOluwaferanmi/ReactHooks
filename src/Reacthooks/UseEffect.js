import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${number} times`;
  }, [number]);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        IncreaseNo
      </button>
    </div>
  );
};

export default UseEffect;
