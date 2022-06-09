import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Container, Typography } from "@mui/material";
import "./AppointmentBanner.css";
const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(42, 45, 46 ,0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 155,
};
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ textAlign: "left" }}>
              <Typography style={{ color: "#1D9894 " }} variant="h6">
                appointment
              </Typography>
              <Typography style={{ color: "wheat" }} variant="h3">
                Make An Appointment Today
              </Typography>
              <p style={{ color: "wheat" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
              </p>

              <button className="btn-grad">Learn More</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
