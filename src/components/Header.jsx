import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Link } from "react-router-dom"

const Header = () => {
  return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h1">Demo</Typography>

                    <Box sx={{display: 'flex', gap: '1em'}}>
                        <Link>
                            <Typography variant='h6'>Home</Typography>
                        </Link>
                        <Link>
                            <Typography variant='h6'>All users</Typography>
                        </Link>
                        <Link>
                            <Typography variant='h6'>One user</Typography>
                        </Link>
                    </Box>

                    <Box>
                        <Button type="button">LOGIN</Button>
                        <Button type="button">LOGIN</Button>
                    </Box>
                 
                </Toolbar>

            </AppBar>
        </Box>
    
  )
}

export default Header
