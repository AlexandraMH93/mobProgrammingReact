import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h4">Demo</Typography>

                    <Box sx={{display: 'flex', gap: '1em', justifyContent: 'space-between'}}>
                        <Link to={'/home'}>
                            <Typography variant='h6'>Home</Typography>
                        </Link>
                        <Link to={'/all'}>
                            <Typography variant='h6'>All users</Typography>
                        </Link>
                        <Link to={'/one'}>
                            <Typography variant='h6'>One user</Typography>
                        </Link>
                    </Box>

                    <Box>
                        {localStorage.getItem('token') ?
                            <Button variant="contained" onClick={() => {handleLogout()}}>Logout</Button>
                        :
                        <>
                            <Link to={'/login'}>
                                <Button variant="contained">LOGIN</Button>
                            </Link>
                            <Link to={'/signup'}>
                                <Button variant="contained">SIGN UP</Button>
                            </Link>
                        </>
                        }   
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    
  )
}

export default Header
