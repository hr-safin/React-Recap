import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";

const Users = () => {
  const [user, setUser] = useState([]);
  const {name , age , university} = useContext(useContext)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const [form, setForm] = useState("")
   
  const handleChange = (e) => {
     
     setForm(e.target.value)
  }
  const handleSubmit = (e) => {
        e.preventDefault()
        if(form === ""){
            alert("please type something")
            return
        }
        console.log(form)
        alert(`Submitted Value : ${form}`)
        setForm("")
  }

  return (
    <div className=" mt-20 pb-20">
      <h2 className=" text-center text-2xl font-extrabold text-black">
        The Users List of {name}{" "}
      </h2>

      <form className=" max-w-xl flex justify-center items-center mx-auto my-10" onSubmit={handleSubmit}>
        <input 
           className=" border p-3"
           type="text"
           value={form}
           onChange={handleChange} 
           
           />

           <button className="text-white bg-blue-600 p-3" type="submit">submit</button>
      </form>

      <div className=" grid grid-cols-3 h-screen gap-10 justify-items-center items-center">
        {user.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Users;
