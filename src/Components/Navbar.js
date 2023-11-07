import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar} from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import logo from '../../src/deep.png'
import TextField from '@mui/material/TextField';
import { searchUser ,choseDatas} from '../Feature/userDetails';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function Navbar() {
  

const allUsers = useSelector((state)=>state.app.user)
  const [searchData,setSearchData]=useState()
 const [searchValue,setSearchValue]=useState('')
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(searchUser(searchValue))
  },[searchValue])


  const HandleChange=(e)=>{
  setSearchData(e.target.value)
  dispatch(choseDatas(e.target.value))
  }

  return (
   



<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

            LOGO

          </Typography>

          <Typography textAlign="center"> 

          <Link to={'/'}  style={{textDecoration:'none',color:'white'}}>

             
          Create post
          </Link>
          </Typography>
          <Typography textAlign="center" style={{marginLeft:'15px'}}> 

          <Link to={'/userlist'}style={{textDecoration:'none',color:'white'}}>
          <GroupAddIcon/>  ({allUsers.length})

         </Link>
         </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* LOGO */}
          </Typography>
     
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
       
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />

          <Box sx={{ flexGrow: '0' }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: '0' }}>
                <Avatar alt="Remy Sharp" src={logo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  


    
  )
}

export default Navbar