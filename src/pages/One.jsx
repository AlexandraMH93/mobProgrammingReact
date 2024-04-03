import React from 'react'
import { getOne } from '../services/userService'

const One = () => {
    const [user, setUser] = useState([])

    const handleUser = async () => {
        const res = await getOne()
        setUser(res)
    }

    useEffect(() => {handleUser()}, [])

    return (
        <div>
            {user && (
                <>
                    <div key={idx}>
                        <p>{user._id}</p>
                        <p>{user.name.firstname}</p>
                        <p>{user.name.lastname}</p>
                        <p>{user.email}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default One
