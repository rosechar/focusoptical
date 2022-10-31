import React from "react";
import {
  Typography,
  Accordion,
  Box,
  AccordionDetails, 
  AccordionSummary, 
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function WhatMakesUsDifferent() {
    return (
        <React.Fragment>
            <Box sx={{maxWidth:400, alignSelf:"center", padding:2}}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Attention to Detail</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I pride myself on making every pair of eyeglasses as if I am making them for myself. Because I want to give everyone the best pair of eyeglasses that they have ever owned. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Cut & Edge on Premise</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Let’s face it, if you have bought your eyeglasses at optical stores that don’t cut and edge your eyeglasses at their location, they have to send them out to a lab where numerous sets of hands will work on your glasses, and your chances of getting a solid pair of eyeglasses diminishes!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>No Sales Pressure</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                At Focus Optical there is no pressure to purchase a new frame. If you want to use your existing frame, you can schedule a time to come in and I will cut and edge them while you wait.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Free Adjustments</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                I offer free eyeglass adjustments to anyone that comes in the store (and we clean them too, no charge)!
                </Typography>
              </AccordionDetails>
            </Accordion>
            </Box>
        </React.Fragment>
    );
    
};

export default WhatMakesUsDifferent;