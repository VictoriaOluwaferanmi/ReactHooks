import React, { useState } from "react";

const UseStateObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.LastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
        <p> Welcome {name.firstName + name.lastName} </p>
      </form>
    </div>
  );
};

export default UseStateObj;
