import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import pic from "../../../images/Telehealth-doctor.jpg";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const DoctorOperation = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img style={{ width: 400 }} src={pic} alt="" />
          </Grid>
          <Grid item xs={12} md={8}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "#BDB237",
                  fontSize: "25px",
                  height: "450px",
                  width: "450px",
                }}
              >
                <p
                  style={{
                    color: "#2E2D21",
                    fontWeight: "20px",
                    textAlign: "center",
                  }}
                >
                  As the original and largest teaching <br />
                  <br />
                  TeleHealth at Mass General hospital of Harvard Medical School,
                  <br />
                  <br />
                  Mass General trains the next generation of leaders in science
                  and medicine.
                </p>
                <Button size="medium" style={{ color: "black" }}>
                  TeleHealth at Mass Genera
                </Button>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "25px",
                    height: "400px",
                    width: "450px",
                  }}
                >
                  <p
                    style={{
                      color: "gray",
                      fontWeight: "20px",
                      textAlign: "center",
                    }}
                  >
                    As the original and largest teaching <br />
                    <br />
                    TeleHealth at Mass General hospital of Harvard Medical
                    School,
                    <br />
                    <br />
                    Mass General trains the next generation of leaders in
                    science and medicine.
                  </p>

                  <Button
                    size="medium"
                    style={{ color: "black", marginLeft: "50px" }}
                  >
                    watch videos
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Typography variant="h6">
                {" "}
                We are committed to delivering the highest quality and safest
                care possible for every patient.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DoctorOperation;
