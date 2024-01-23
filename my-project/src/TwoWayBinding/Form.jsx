import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className=" p-28">
      <h2 className=" pb-3">How Two Way Binding Works</h2>
      <form>
        <input
          className=" border-2 border-black px-4 py-2"
          type="text"
          value={userName}
          name="text"
          onChange={(e) => {
            e.preventDefault()
            setUserName(e.target.value)
            console.log(e.target.value)
          }}
        />
      </form>

      <p className=" pt-10">{userName}</p>
    </div>
  );
};

export default Form;
