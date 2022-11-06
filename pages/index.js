import React, { useEffect } from "react";
import contactImg from '../components/images/contacts.jpg';
import eyeImg from '../components/images/eye.jpg';
import { 
  Alert, 
  Snackbar, 
  Stack, 
  Fade, 
  ImageList, 
  ImageListItem, 
  Button, 
  Typography, 
  Divider, 
  Box, 
  Link 
} from '@mui/material'
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import shopImg from '../components/images/home.jpeg';
import shopImg2 from '../components/images/home3.jpeg';
import tomImg from '../components/images/tom.jpg';
import shopImg1 from '../components/images/shop.jpeg';
import Image from 'next/legacy/image';
import Testimonals from "../components/testimonials";
import WhatMakesUsDifferent from "../components/whatMakesUsDifferent";
import ServicesList from "../components/servicesList";



export default function Index() {
  const [promo, setPromo] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPromo(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => setPromo(true), 6000);
    return () => clearTimeout(timer);
  }, []);
        return (
            <React.Fragment>
              <Stack justifyContent="center" >
              <Snackbar anchorOrigin={{ vertical:"bottom", horizontal:"center" }}open={promo} autoHideDuration={10000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  <Typography variant="h6">Limited Time Special: Free Frames With Purchase of Lenses!</Typography>
                  <Typography variant="b2">
                    Call <Link href="tel:2488528830" variant="b1" underline="none" color="inherit" >
          (248) 852-8830 </Link> for details.
                  </Typography>
                   
                </Alert>
              </Snackbar>
              <Fade in timeout={4000}>
            <ImageList
            
            variant="masonry"
            cols={3}
            rowHeight={121}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img.src} cols={item.cols || 1} rows={item.rows || 1}>
                  <Image alt="" quality={50} layout="fill" objectFit="cover" src={item.img.src}></Image>
                </ImageListItem>
            ))}
            </ImageList>
            </Fade>
            <Box pb={2} sx={{ maxWidth:400, alignSelf:"center"}}>
            <Button size="large" href="/contact" variant="outlined" startIcon={<CalendarIcon/>}>
              Schedule an Appointment
            </Button>
            </Box>
            <Divider><Typography lineHeight={1} variant="overline" fontWeight={1} fontSize={20}>Services</Typography></Divider>
              <ServicesList/>
            <Divider > <Typography lineHeight={2} variant="overline" fontWeight={1} fontSize={20}>What Makes Us Different</Typography></Divider>
              <WhatMakesUsDifferent/>
            <Divider ><Typography lineHeight={2} variant="overline" fontWeight={1} fontSize={20}>Testimonals</Typography></Divider>
              <Box ml={{xs:2, md:30}} mr={{xs:2, md:30}} height={{xs:140, md:110}} >
              <Testimonals/>
              </Box>
            </Stack>
            </React.Fragment>
        );
};

const itemData = [
    {
      img: shopImg,
      rows: 2,
    },
    {
      img: contactImg
    },
    {
      img: tomImg,
      
    },
    {
      img: shopImg1,
      rows: 2
    },
    {
      img: shopImg2,
      rows: 2,
    },
    {
      img: eyeImg
    }
  ];
