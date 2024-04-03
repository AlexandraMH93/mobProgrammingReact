import { useContext, useState } from 'react'
import './App.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import { NameContext } from './context/userContext'

function App() {
  const [user, setUser] = useState()

  return (
    <>
    <NameContext.Provider value={{setUser, user}}>
      <RouterProvider router={router} />
    </NameContext.Provider>
    </>
  )
}

export default App