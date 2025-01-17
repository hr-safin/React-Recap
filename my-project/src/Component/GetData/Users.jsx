import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Users = () => {
   
    const [user, setUser] = useState([])



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(data => setUser(data))
      }, [])

  return (

    <div className=' mt-20 pb-10'>
      
      <h2 className=' text-center text-2xl font-extrabold text-black'>The Users List </h2>
      
      <div className=' grid grid-cols-3 h-screen gap-10 justify-items-center items-center'>
            {user.map((data, index) => <Card data={data} key={index} />)}
      </div>
    </div>
  )
}

export default Users
