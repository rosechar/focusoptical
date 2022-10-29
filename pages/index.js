import React, { useEffect } from "react";
import contactImg from '../components/images/contacts.jpg';
import eyeImg from '../components/images/eye.jpg';
import { Alert, Snackbar, Grid, Stack, Fade, ImageList, ImageListItem, Button, Typography, Card, CardContent, Accordion, Divider, List, ListItem, ListItemIcon, ListItemText, Box, AccordionDetails, AccordionSummary, Link } from '@mui/material'
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import EyeIcon from '@mui/icons-material/VisibilityOutlined';
import ShopIcon from '@mui/icons-material/StoreOutlined';
import ExamIcon from '@mui/icons-material/BiotechOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import shopImg from '../components/images/home.jpeg';
import shopImg2 from '../components/images/home3.jpeg';
import docImg from '../components/images/doc.jpg';
import shopImg1 from '../components/images/shop.jpeg';
import Image from 'next/legacy/image';


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
              <Stack justifyContent="center">
              <Snackbar alignContent={"center"} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}open={promo} autoHideDuration={10000} onClose={handleClose}>
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
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <Image alt="" quality={50} layout="fill" objectFit="cover" src={item.img.src}></Image>
                </ImageListItem>
            ))}
            </ImageList>
            </Fade>
            <Button  href="/contact" variant="outlined" sx={{ maxWidth:400, alignSelf:"center"}} startIcon={<CalendarIcon/>}>
              Schedule an Appointment
            </Button>
            <Divider><Typography variant="overline" fontWeight={1} fontSize={20}>Services</Typography></Divider>
              <List component={Stack} direction="column" alignSelf={"center"}>
                <ListItem disablePadding>
                    <ListItemIcon>
                      <ExamIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eye Exam" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                      <EyeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Lens Exam" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                      <ShopIcon />
                    </ListItemIcon>
                    <ListItemText primary="Glasses & Contacts Retail" />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                      <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Free Adjustments" />
                </ListItem>
              </List>
            <Divider > <Typography variant="overline" fontWeight={1} fontSize={20}>What Makes Us Different</Typography></Divider>

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
            <Divider ><Typography variant="overline" fontWeight={1} fontSize={20}>Testimonals</Typography></Divider>

            <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Card sx={{ minWidth: 275, alignSelf: "center", margin:3}}>
              <CardContent>
                <Typography variant="h6" fontWeight={1} fontStyle={"italic"} marginBottom={1} >
                “Tom really helped me out to get a great pair of glasses for a great price!”
                </Typography>
              <Link sx={{ mb: 1.5, padding: 3}} href="https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s116806430231588781376!2s0x8824c18eb6e1bd0d:0xddd76cb4db1ee92?sa=X&ved=2ahUKEwjYrpCRgor4AhUZZDABHYJ1DvMQv_QBegQIUxAY" underline="none" color="text.secondary">
                  - Erik Brace
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, alignSelf: "center",  margin:3}}>
              <CardContent>
                <Typography variant="h6" fontWeight={1} fontStyle={"italic"} marginBottom={1} >
                “I have been going here since I was a little girl! Tom is super helpful, and the doc is great! I would recommend this place to everyone.”
                </Typography>
              <Link sx={{ mb: 1.5, padding: 3}} href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNvcHZlM0NREAE!2m1!1s0x0:0xddd76cb4db1ee92!3m1!1s2@1:CIHM0ogKEICAgICopve3CQ%7CCgsI5-qQ4wUQqKvOZg%7C?hl=en-US" underline="none" color="text.secondary">
                  - Emily Krupp
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, alignSelf: "center",  margin:3}}>
              <CardContent>
                <Typography variant="h6" fontWeight={1} fontStyle={"italic"} marginBottom={1} >
                “The owner was very helpful...I&apos;ll come here from now on”
                </Typography>
              <Link sx={{ mb: 1.5, padding: 3}} href="https://www.google.com/maps/reviews/@42.6354012,-83.1718076,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURHZ0phel93RRAB!2m1!1s0x0:0xddd76cb4db1ee92?hl=en-US" underline="none" color="text.secondary">
                  - Ed Zomby
                </Link>
              </CardContent>
            </Card>
            </Stack>
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
      img: docImg,
      
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
