import React, { useContext } from "react";
import { UserContext, IndigenContext } from "../App";

const UseContextComponentB = () => {
  const username = useContext(UserContext);
  const origin = useContext(IndigenContext);
  return (
    <div>
      {username} - {origin}
    </div>
  );
};

export default UseContextComponentB;
