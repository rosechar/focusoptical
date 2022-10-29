import React from "react";
import {
    Typography,
    Stack
  } from "@mui/material";

function Services() {
    return (
            <React.Fragment sx={{maxWidth:500}}>
            <Stack alignItems="left" spacing={2} p={{xs:3, md:7}} >
              <Typography alignSelf="center" variant="h4" fontWeight={1}>
                About Focus Optical
              </Typography>
              <Typography alignSelf="center"  fontStyle="italic" >
                From the owner, Tom Hamilton
              </Typography>
              <Typography>
                Hello, my name is Tom Hamilton. I&apos;m an optician and I own and operate Focus Optical. I opened the store in 1982. We are a full service optical store, with eye examinations performed by Dr. Diane Galper, Optometrist.
              </Typography>
              <Typography>
                We specialize in making eyelgasses and we also sell contact lenses. I have been making eyeglasses since 1977, with over 45 years of experience! 
              </Typography>       
              <Typography>
                I always treat every pair of eyeglasses I make as if I were making them for myself, guarenteeing you the best made pair of eyeglasses you have ever owned. I take pride in adjusting your new pair of eyeglasses, defintely a lost art!
              </Typography> 
              <Typography>
                I also offer next day service on most prescriptions.
              </Typography>
            </Stack>
        </React.Fragment>
        );
};

export default Services;