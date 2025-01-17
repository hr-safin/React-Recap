import React, { useState } from "react";
import axios from "axios";
const GetData = (props) => {
  const [user, setUser] = useState([]);
  console.log(props.name);
  const getUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await res.data;
    setUser(data);
    console.log(data)
  };

  const [click , setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <div className=" p-10 flex flex-col gap-20 justify-center items-center h-screen">

        <button className="bg-green-600 p-4 text-lg" onClick={handleClick}>Click to view</button>

        {click &&  <p className=" text-center w-[500px] bg-black text-white p-5 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repellendus animi vero delectus molestias quo recusandae porro aut, id, laudantium deserunt in ratione culpa maxime non, dolore saepe dolorum debitis.</p> }
       

      <button
        onClick={getUser}
        className="bg-blue-500 rounded-md px-4 py-2 text-white"
      >
        Get Data
      </button>

      <div className=" bg-gray-50 p-5 mt-6">
        {user.map((item, index) => (
          <h2 className=" text-lg pt-5" key={index}>
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default GetData;
