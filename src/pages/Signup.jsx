import { Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signup } from '../services/authService'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSignup = async () => {
        const res = await signup({email, name: {firstname, lastname}, username, password})
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        navigate('/home')


    }

  return (
    <div className='main'>
      <Card sx={{width: '25vw'}}>
        <CardHeader title='Sign up'>
            <Typography variant='h3'>Sign up</Typography>
        </CardHeader>
        <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
            <TextField type='text' variant='filled' label='Firstname' onChange={(e) => setFirstname(e.target.value)}></TextField>
            <TextField type='text' variant='filled' label='Lastname' onChange={(e) => setLastname(e.target.value)}></TextField>
            <TextField type='email' variant='filled' label='Email' onChange={(e) => setEmail(e.target.value)}></TextField>
            <TextField type='text' variant='filled' label='Username' onChange={(e) => setUsername(e.target.value)}></TextField>
            <TextField type='password' variant='filled' label='Password' onChange={(e) => setPassword(e.target.value)}></TextField>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
            <Link to={'/'}>
                <Button>Cancel</Button>
            </Link>
            <Button variant='contained' onClick={() => handleSignup()}>Sign up</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Signup
