import { Typography, Grid } from "@mui/material";
import React from "react";
import { Component } from 'react';
import ContactForm from "../components/contactForm";
import SuccessIcon from '@mui/icons-material/DoneAll';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';


function Contact() {
    const [formComplete, setFormComplete] = React.useState(false);
    const updateFormStatus = (formComplete) => {
        setFormComplete(formComplete);
      }
        return (
            <React.Fragment>
                <Grid direction={{ xs: 'column', sm: 'row' }} container  justifyContent="center" alignItems="center">
                    {formComplete ? 
                    <Grid m={5} item xs={2} sm={4} ml={{ xs: 5, sm: 0}}>
                        <Typography align="center">
                        <SuccessIcon sx={{ fontSize: 100 }}/>
                            <CalendarIcon sx={{ fontSize: 100 }} />
                        </Typography>
                        <Typography mt={3} variant="h5" fontWeight={1} align="center" >
                            Thank you for your appointment request, we will contact you within one business day to confirm your appointment. 
                        </Typography> 
                    </Grid> : 
                    <><Grid item xs={2} sm={4} m={{ xs: 5, sm: 0 }} pr={{ xs: 0, sm: 5 }}>
                            <Typography variant="h4" fontWeight={1} mb={2}>
                                Schedule an Appointment
                            </Typography>
                            <Typography variant="h5" fontWeight={1}>
                                Fill out this form and we will contact you to confirm your appointment
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ContactForm updateFormStatus={updateFormStatus}></ContactForm>
                        </Grid></>
}
                </Grid>
            </React.Fragment>
        );
};

export default Contact;