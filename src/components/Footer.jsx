import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const Footer = () => {
  return (
    <>
      <Box sx={{bottom: '0', position: 'fixed', width: '100vw'}}>
        <Typography variant="h6">&copy;Reboot Academy</Typography>
      </Box>
    </>
  )
}

export default Footer
