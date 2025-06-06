import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './sidebar.css'
import { Box, Button, Grid } from '@mui/material';
import { LogoutTwoTone } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const userAccordianList = ["Admins","CLients","Coordinators"]
  
  return (
    <Box sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "2px solid #d175b6",
      borderRadius: "10px",
      padding: "20px",
    }}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Events</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography component="span" sx={{ cursor: 'pointer' }} onClick={() => navigate('/new')}>
                New Requests
              </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography component="span">
              <Grid container spacing={2}>
                <Grid size={6}>
                  Estimate
                </Grid>
                <Grid size={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Badge badgeContent={9} sx={{ backgroundColor: "#FDF7FB" }}></Badge>
                </Grid>
              </Grid>
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography component="span">
              Events
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography component="span">
              Partial Requests
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel2-content">
            <Typography component="span">Positions</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel3-content">
            <Typography component="span">Contractors</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Users</Typography>
          </AccordionSummary>
          {userAccordianList.map((item, index) => (
            <AccordionDetails key={index}>
              <Typography component="span">{item}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      </div>
      <div>
        <Button size='large' variant="contained" startIcon={<LogoutTwoTone />} sx={{ backgroundColor:'black' }} fullWidth={true} onClick={() => console.log('Logout')}>
          Logout
        </Button>
      </div>
    </Box>
  )
}

export default Sidebar