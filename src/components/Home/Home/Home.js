import React from "react";
import Services from "../../Services/Services";
import Navigations from "../../Shared-pages/Navigations";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import DoctorOperation from "../DoctorOperation/DoctorOperation";
const Home = () => {
  return (
    <div>
      <Navigations></Navigations>
      <DoctorOperation />
      <Banner />
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
    </div>
  );
};

export default Home;
