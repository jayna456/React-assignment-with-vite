import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import './App.css'
import Sidebar from './utils/Sidebar'
import DataTable, { Alignment } from 'react-data-table-component';
import { ArrowDownwardSharp, SearchSharp, VisibilityOutlined } from "@mui/icons-material";

import data from './utils/data.json'; 
import Header from './Header';

function App() {
  
  const columns = [
    {
      name: 'Event Name',
      cell: (row) => (
        <>
          <IconButton sx={{ color: 'white' }}>
            <VisibilityOutlined /> 
          </IconButton>
          <Typography sx={{ color: 'white', paddingLeft: '20px' }}>{row.eventName}</Typography>
        </>
        ),
      sortable: true,
      right: true,
      style: {
        textAlign: 'left'
      },
    },
    {
      name: 'Event Start',
      selector: row => row.eventStart,
      sortable: true,
      right: true,
    },
    {
      name: 'Event End',
      selector: row => row.eventEnd,
      sortable: true,
      right: true,
    },
    {
      name: 'Client Name',
      selector: row => row.clientName,
      sortable: true,
      right: true,
    },
    {
      name: 'Contact Info',
      selector: row => row.contactInfo,
    },
    {
      name: 'Vanue',
      selector: row => row.venue,
    },
  ];

  const customStyles = {
    header: {
      style: {
        textAlign: 'flex-end',
        backgroundColor: 'transparent',
        color: 'white',
        border: "2px solid #d175b6",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        BorderBottom: "0px",
        fontWeight: 'bold',
        fontSize: '24px',
        Padding: '20px',
      },
    },
    headRow: {
      style: {
        textAlign: 'flex-start',
        fontSize: '18px',
        backgroundColor: '#d175b6',
        color: 'white',
      }
    },
    rows: {
      style: {
        textAlign: 'flex-start',
        fontSize: '14px',
        backgroundColor: 'transparent',
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
        <Grid size={9}>
          {/* data table */}
          <DataTable
            title={
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Typography sx={{ fontSize: '18px', alignItems: 'center', paddingTop: '10px' }}>
                    Event Requests
                  </Typography>
                </Grid>
                <Grid size={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <TextField id="outlined-basic" variant="outlined" className='header-text' placeholder='Search here'
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start" className='search-icon'>
                            <SearchSharp />
                          </InputAdornment>
                        ),
                      },
                    }} size='small' sx={{ marginRight: '20px' }}
                  />
                  <Button variant='container' className='header-button'>+</Button>
                </Grid>
              </Grid>
            }
            columns={columns}
            data={data}
            pagination
            paginationPerPage={13}
            paginationTotalRows={data.length}
            sortIcon={<ArrowDownwardSharp />}
            responsive={true}
            customStyles={customStyles}
            conditionalRowStyle={row => {
              return {
                className: 'rdt_TableRow', // Apply the CSS class to all rows
              };
            }}
            subHeaderAlign={Alignment.LEFT}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
