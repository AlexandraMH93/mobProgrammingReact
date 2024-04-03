import React, { useContext } from 'react'
import { NameContext } from '../context/userContext'

const Home = () => {
  const {user} = useContext(NameContext)

  return (
    <div className='main'>
        Welcome {user.name && user.name.firstname}
    </div>
  )
}

export default Home