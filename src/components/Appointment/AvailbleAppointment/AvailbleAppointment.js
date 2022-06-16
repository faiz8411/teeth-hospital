import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8.00am-9.00am",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetics Dentistry",
    time: "10.00am-11.30am",
    price: 32,
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5.00am-6.30am",
    price: 14,
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7.00am-8.30am",
    price: 10,
    space: 10,
  },
  {
    id: 5,
    name: "Teeth orthodontics 2",
    time: "8.00pm-9.00pm",
    price: 30,
    space: 10,
  },
  { id: 6, name: "Oral surgery", time: "11.00am-1.00pm", price: 13, space: 12 },
];
const AvailbleAppointment = ({date}) => {
    return (
      <Container style={{ textAlign: "center" }}>
        <Typography variant='h4'sx={{fontWeight:"600",color:"info.main"}}>
          Available Appointment 
          {date.toDateString()}
        </Typography>
        <Grid container spacing={2}>
          {
            bookings.map(item => <Booking key={item.name}
            item={item}
            ></Booking>)
         }
        </Grid>
      </Container>
    );
};

export default AvailbleAppointment;