import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import { Avatar, Badge, Box, Typography } from '@mui/material'
import React from 'react'
import './header.css'; 

function Header() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'flex-end'}} mt={0} mb={2}>
        <AssignmentLateOutlinedIcon sx={{marginTop:"10px"}} />
        {/* <Badge badgeContent="" color="secondary" sx={{marginLeft:'10px', marginTop:'10px'}} className='noti-badge' > */}
            <NotificationsNoneOutlinedIcon sx={{marginLeft:'10px', marginTop:'10px'}} />
        {/* </Badge> */}
        <Box sx={{display:'flex'}} ml={2}>
            <Avatar>M</Avatar>
            <Box sx={{ display:'flex', flexDirection:'column'}} ml={1}>
                <Box sx={{display:'flex',flexDirection:'row'}}><Typography>Hi,&nbsp;&nbsp;&nbsp;</Typography> <Typography sx={{color:"#13A296"}}>Mohhamad Asad</Typography></Box>
                <Typography component={'span'}>Welcome Back!</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Header