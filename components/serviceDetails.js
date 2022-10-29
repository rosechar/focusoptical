import React from "react";
import {
  Typography,
  Stack,
  Box
} from "@mui/material";
import Image from 'next/legacy/image';
import toolImg from '../components/images/tool.jpeg'
import contactImg from '../components/images/contact.jpg'
import contactImg1 from '../components/images/contact1.jpg'
import glassesImg from '../components/images/glasses3.jpg'

const DetailOptions = {
    eye: {
        title: 'Eye Exams',
        details: 'It is recommended to get an eye exam annually to assess your eyesight, especially as your eyes change as you age.',
        img: toolImg
    },
    contact: {
        title: 'Contact Lens Exams',
        details: 'It is essential to have a seperate contact exam if you are interested in contact lenses to ensure a comfortable fit. An eye exam is included with your contact lens exam.',
        img: contactImg
    },
    adjustments: {
        title: 'Free Eyeglass Adjustments',
        details: 'As a courtesy to anyone, we offer free adjustments and cleaning for your glasses.',
        img: glassesImg
    },
    retail: {
        title: 'Eyeglasses & Contact Lens Retail',
        details: 'We offer a wide selection of frames and contact lenses, giving you options without sales pressure. We can also add new lenses to existing frames if you prefer. And we offer next day service on most prescriptions.',
        img: contactImg1
    },
  };

function ServiceDetails({ option }) {
    return (
        <React.Fragment>
        <Stack flexGrow={1} justifyContent="top" alignItems="center" p={4}  >
            <Typography flexGrow={1} variant="h5" fontWeight={1} >{DetailOptions[option].title} </Typography>
            <Typography variant="b3" p={2}> {DetailOptions[option].details} </Typography>
            
        </Stack>
        <Box height={300} position="relative" > 
        <Image alt="" layout="fill" objectFit="cover" src={DetailOptions[option].img} />
        </Box>
        </React.Fragment>
    );
    
};

export default ServiceDetails;