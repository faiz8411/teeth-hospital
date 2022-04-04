import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from "../../../src/images/fluoride.png";
import cavity from "../../../src/images/cavity.png";
import whitening from "../../../src/images/whitening.png";
import Service from "../Home/Service/Service";
const services = [
  {
    name: "fluoride Treatment",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa cum laborum at ipsum, itaque officia totam quidem, aspernatur assumenda animi sit eius impedit quam atque quos, aliquid hic expedita?",
    img: fluoride,
  },
  {
    name: "cavity filling",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa cum laborum at ipsum, itaque officia totam quidem, aspernatur assumenda animi sit eius impedit quam atque quos, aliquid hic expedita?",
    img: cavity,
  },
  {
    name: "Teeth whitening",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa cum laborum at ipsum, itaque officia totam quidem, aspernatur assumenda animi sit eius impedit quam atque quos, aliquid hic expedita?",
    img: whitening,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, color: "info.main", m: 2 }}
          variant="h6"
          component="div"
        >
          OUE SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
