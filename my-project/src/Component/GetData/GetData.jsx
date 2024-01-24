import React, { useState } from 'react';
import axios from 'axios';
const GetData = () => {

    const [user, setUser] = useState([])

    const getUser = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const data = await res.data
        setUser(data)
    }
    return (
        <div className=' p-10'>
            <button onClick={getUser} className='bg-blue-500 rounded-md px-4 py-2 text-white'>Get Data</button>
            
            <div className=' bg-gray-50 p-5 mt-6'>
                 {user.map((item,index) =><h2 className=' text-lg pt-5' key={idx}>{item.name}</h2>)}
            </div>
        </div>
    );
};

export default GetData;