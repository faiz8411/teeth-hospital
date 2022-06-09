import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from 'react';
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bannerBg = {
    backGround: `url(${bg})`,
}   
const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height:450,

}
const Banner = () => {

    return (
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            style={{ ...verticalCenter, textAlign: "left" }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 14, color: "gray" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remainin
              </Typography>
              <Button
                className="btn-grad"
                variant="contained"
                sx={{ textAlign: "center" }}
              >
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "450px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;