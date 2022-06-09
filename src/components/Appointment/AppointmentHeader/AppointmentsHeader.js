import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from "../../../images/chair.png";
import StaticDatePickerLandscape from '../../Shared-pages/Calender/Calender';
const AppointmentsHeader = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StaticDatePickerLandscape/>
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width:"100%"}} src={chair} alt=''/> 
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentsHeader;