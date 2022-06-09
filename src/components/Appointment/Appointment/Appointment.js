import React from 'react';
import Navigations from "../../Shared-pages/Navigations";
import AppointmentsHeader from '../AppointmentHeader/AppointmentsHeader';
import AvailbleAppointment from '../AvailbleAppointment/AvailbleAppointment';
const Appointment = () => {
    return (
        <div>
            <Navigations></Navigations>
            <AppointmentsHeader />
            <AvailbleAppointment/>
        </div>
    );
};

export default Appointment;