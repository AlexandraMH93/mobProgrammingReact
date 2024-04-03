import React, { useEffect, useState } from 'react'
import { getAll } from '../services/userService'

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
      {users && users.map((user, idx) => {
        return (
            <div key={idx}>
                <p>{user._id}</p>
                <p>{user.name.firstname}</p>
                <p>{user.name.lastname}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
                <p>{user.password}</p>

            </div>
        )
      })} 
    </div>
  )
}

export default All
