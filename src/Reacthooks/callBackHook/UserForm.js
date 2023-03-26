import React from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [lastName, bindLastName, resetLastName] = useInput("");
  const [firstName, bindFirstName, resetFirstName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      UserForm
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input {...bindFirstName} type="text" />
        </div>

        <div>
          <label>LastName</label>
          <input {...bindLastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
