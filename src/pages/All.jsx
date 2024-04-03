import React, { useContext, useEffect, useState } from 'react'
import { getAll } from '../services/userService'
import { NameContext } from '../context/userContext'

const All = () => {
    const [users, setUsers] = useState([]) 
    
    
    const handleUsers = async () => {
        const res = await getAll()
        setUsers(res)
        console.log(users)
    }

    useEffect(() => {handleUsers()}, [])

  return (
    <div>
      <h1>All</h1>
      {users && users.map((element, idx) => {
        console.log(element)
        return (
            <div key={idx}>
                <p>{element._id}</p>
                <p>{element.username}</p>
                <p>{element.role}</p>

            </div>
        )
      })} 
    </div>
  )
}

export default All