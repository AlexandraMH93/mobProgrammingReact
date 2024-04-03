import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../services/authService'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async () => {
        const res = await login({email, password})
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        navigate('/home')
    }

  return (
    <div className='main'>
        <Card sx={{width: '25vw'}}>
            <CardHeader title='Login'>
                <Typography variant='h3'>Login</Typography>
            </CardHeader>
            <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField type='email' variant='filled' label='email' onChange={(e) => setEmail(e.target.value)}></TextField>
                <TextField type='password' variant='filled' label='password' onChange={(e) => setPassword(e.target.value)}></TextField>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                <Link to={'/'}>
                    <Button>Cancel</Button>
                </Link>
                <Button variant='contained' onClick={() => handleLogin()}>Login</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Login
