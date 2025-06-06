import { Autocomplete, Box, Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './utils/Sidebar'
import { ArrowBack, StarBorderRounded } from '@mui/icons-material';
import './newRequest.css'
import DataTable, { Alignment } from 'react-data-table-component';
import data from './utils/position.json';
import Header from './Header';

function NewRequest() {
  const columns = [
    {
      name: 'Position',
      selector: row => row.position,
    },
    {
      name: 'Time',
      selector: row => row.time,
    },
    {
      name: 'Info',
      selector: row => row.info,
    },
    {
      name: 'Quantity',
      selector: row => row.quantity,
      width: '80px'
      
    },
    {
      name:"",
      cell: (row) => (
        <>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Select Contractor</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
              sx={{ border: "solid 1px #d175b6", color: "white", backgroundColor: "black" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </>
        ),
    }
  ]

  const customStyles = {
    headRow: {
      style: {
        textAlign: 'flex-start',
        fontSize: '18px',
        backgroundColor: 'black',
        color: 'white',
        BorderBottom: "2px solid #d175b6",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }
    },
    rows: {
      style: {
        textAlign: 'flex-start',
        fontSize: '14px',
        backgroundColor: 'black',
        color: 'white',
      },
    },
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid size={3} className='hide-on-mobile'>
          {/* sidebar */}
          <Sidebar />
        </Grid>
        <Grid size={9} sx={{ border:"solid 2px #d175b6", borderRadius:"10px", padding:"20px" }}>
          {/* main content */}

          {/* Back button and title/heading */}
          <Box sx={{ display: "flex", alignItems:"flex-start"}}>
            <ArrowBack />
            <Typography sx={{fontSize: "20px", paddingLeft:"10px" }}>
              Event Name
              <Typography component={'span'} sx={{ paddingLeft:"5px"}}>(Venue Details)</Typography>
            </Typography>
          </Box>

          {/* Tabs / button group */}
          <Box mt={2}>
            <ButtonGroup variant="outlined" aria-label="Basic button group" color='secondary'>
              <Button className='set-font setBorder'>Event Details</Button>
              <Button className='set-bgcolor set-font'>Assign Coordinator/Coordinator</Button>
              <Button className='set-font'>Session Management</Button>
              <Button className='set-font set-border'>Generate SOW</Button>
            </ButtonGroup>
          </Box>

          {/* input fields */}
          <Box>
            <Grid spacing={2} container mt={2}>
              <Grid size={6}>
                <Box>
                  <Autocomplete size='small' disablePortal className='set-coordinat'
                    options={['Coordinator 1', 'Coordinator 2', 'Coordinator 3']}
                    renderInput={(params) => <TextField {...params} label="Search Coordinator" />}
                />
                </Box>
                <Box>
                  <Typography component={'span'} sx={{color:"#D175B6", fontSize: "14px"}}>Add New Coordinator</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box>
                  <TextField className='text-white' size='small' value={'Start: 12-12-2023                   Ends: 15-12-2023'}  fullWidth sx={{color:'white'}}/>
                </Box>
                <Box mt={2}>
                  <TextField className='text-white' size='small' value={'Venue Address: Some Location 12, Name Here, City, State.'} fullWidth sx={{color:'white'}} />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* table and box content */}
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid size={3.5}>
                <Typography component={'h1'} sx={{fontWeight:'bold'}}>Assign Contractor</Typography>
                <Grid sx={{ border: 'solid 1px #D175B6', borderRadius: '10px', backgroundColor:'black', boxShadow:'10px #D175B6'}} p={2}>
                  <Box className='coordinate-box' p={2} sx={{ backgroundColor: '#D175B6', color: 'white'}}>
                    <Box sx={{ display:'flex'}}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '14px'}}>Meeting Room 1</Typography>
                      <StarBorderRounded />
                      <Typography component={'span'} sx={{color:'black', fontSize: '14px'}}>12 positions</Typography>
                    </Box>
                    <Box>
                      <Typography component={'span'} sx={{ fontSize: '10px'}}>
                        Start from 12 Jan, 2023  - Ends at 15 Jan, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Box className='coordinate-box' p={2}>
                    <Box sx={{ display:'flex'}}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '14px'}}>Meeting Room 2</Typography>
                      <StarBorderRounded />
                      <Typography component={'span'} sx={{color: '#D175B6', fontSize: '14px'}}>12 positions</Typography>
                    </Box>
                    <Box>
                      <Typography component={'span'} sx={{ fontSize: '10px'}}>
                        Start from 12 Jan, 2023  - Ends at 15 Jan, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Box className='coordinate-box' p={2}>
                    <Box sx={{ display:'flex'}}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '14px'}}>Meeting Room 3</Typography>
                      <StarBorderRounded />
                      <Typography component={'span'} sx={{color: '#D175B6', fontSize: '14px'}}>12 positions</Typography>
                    </Box>
                    <Box>
                      <Typography component={'span'} sx={{ fontSize: '10px'}}>
                        Start from 12 Jan, 2023  - Ends at 15 Jan, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Box className='coordinate-box' p={2}>
                    <Box sx={{ display:'flex'}}>
                      <Typography sx={{ fontWeight: 'bold', fontSize: '14px'}}>Meeting Room 4</Typography>
                      <StarBorderRounded />
                      <Typography component={'span'} sx={{color: '#D175B6', fontSize: '14px'}}>12 positions</Typography>
                    </Box>
                    <Box>
                      <Typography component={'span'} sx={{ fontSize: '10px'}}>
                        Start from 12 Jan, 2023  - Ends at 15 Jan, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Box className='coordinate-box' p={2}>
                    <Box sx={{ display:'flex'}}>
                      <Typography sx={{ fontWeight:'bold', fontSize: '14px'}}>Meeting Room 5</Typography>
                      <StarBorderRounded />
                      <Typography component={'span'} sx={{color: '#D175B6', fontSize: '14px'}}>12 positions</Typography>
                    </Box>
                    <Box>
                      <Typography component={'span'} sx={{ fontSize: '10px'}}>
                        Start from 12 Jan, 2023  - Ends at 15 Jan, 2023
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid size={8.5}>
                <Typography component={'h1'} sx={{fontWeight:'bold'}}>Positions</Typography>
                <Box >
                  <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={10}
                    responsive={true}
                    customStyles={customStyles}
                    conditionalRowStyle={row => {
                      return {
                        className: 'rdt_TableRow', // Apply the CSS class to all rows
                      };
                    }}
                    subHeaderAlign={Alignment.LEFT}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Button */}
          <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' size='large' className='btn-edit'>Save Edits</Button>  
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default NewRequest