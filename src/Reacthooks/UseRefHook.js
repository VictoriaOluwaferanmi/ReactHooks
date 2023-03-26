import React, { useEffect, useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>Using useref for input focus</p>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefHook;
