import React, { useContext, useEffect } from 'react'
import { getOne } from '../services/userService'
import { NameContext } from '../context/userContext'

const One = () => {
    /* const [user, setUser] = useState([]) */

    //const userContext = useContext(NameContext)
    const {user, setUser} = useContext(NameContext)

    const handleUser = async () => {
        const res = await getOne()
        setUser(res)
    } 

    useEffect(() => {handleUser()}, [])

    return (
        <div>
            {user && (
                <>
                    {user.name && 
                    <>
                        <p>{user.name.firstname}</p>
                        <p>{user.name.lastname}</p>
                    </>}
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </>
            )}
        </div>
    )
}

export default One