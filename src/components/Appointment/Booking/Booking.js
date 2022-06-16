import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ item }) => {
    const { name, price, space, time } = item;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);
    return (
      <>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ py: 5 }}>
            <Typography
              sx={{ color: "info.main" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              {name}
            </Typography>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              {time}
            </Typography>
            <Typography variant="caption" gutterBottom display="block">
              {space} space available{" "}
            </Typography>
            <Button
              onClick={handleOpenBooking}
              style={{ textTransform: "uppercase" }}
              variant="contained"
            >
              Book Appointment
            </Button>
          </Paper>
        </Grid>
        <BookingModal
          openBooking={openBooking}
                handleCloseBooking={handleCloseBooking}
                item={item}
        ></BookingModal>
      </>
    );
};

export default Booking;