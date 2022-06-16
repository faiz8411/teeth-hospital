import React from 'react';
import Navigations from "../../Shared-pages/Navigations";
import AppointmentsHeader from '../AppointmentHeader/AppointmentsHeader';
import AvailbleAppointment from '../AvailbleAppointment/AvailbleAppointment';
const Appointment = () => {
     const [date, setDate] = React.useState(new Date());
    return (
        <>
            <Navigations></Navigations>
            <AppointmentsHeader date={date} setDate={ setDate}/>
            <AvailbleAppointment date={ date}/>
        </>
    );
};

export default Appointment;