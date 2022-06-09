import { Grid, Typography } from "@mui/material";
import React from "react";

const TopMenu = () => {
  return (
    <div style={{ background: "gray", height: "30px" }}>
      <Grid spacing={3} style={{ display: "flex" }}>
        <Grid md={4}>
          <Typography style={{ color: "white" }}>
            mobile:+8801629207400
          </Typography>
        </Grid>
        <Grid md={4}>
          <div>
            <span>address:</span>
            <span>new york</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopMenu;
