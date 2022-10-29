import { Typography, Stack } from "@mui/material";
import React from "react";
import { Component } from 'react';

class Pricing extends Component {
    render() {
        
        return (
            <React.Fragment>
                <Stack  padding={3} alignItems="center">
                    <Typography variant="body1" fontWeight={1} mb={2}>
                    Please contact the shop at (248) 852-8830 for details on pricing and insurance.
                    </Typography>
                </Stack>
            </React.Fragment>
        );
    }
};

export default Pricing;