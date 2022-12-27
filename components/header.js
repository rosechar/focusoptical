import React from "react";
import {
    Toolbar,
    Typography,
    Stack,
    Link,
    Box,
    SvgIcon
  } from "@mui/material";
  
const HomeIcon = (props) => (
    <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" >
    <path d="M17.2 19.1C15.1 21.3 0 53.3 0 55.6c0 .7.9 1.8 2 2.4 1.3.7 2 2.1 2 4.1 0 3.5 2.4 9.5 4.8 12.2 4.3 4.7 14.5 7.4 21.6 5.8 8.5-2 12.7-7.8 13.5-18.5l.6-7.1h7l.6 7.1c.8 10.7 5 16.5 13.5 18.5 7.1 1.6 17.3-1.1 21.6-5.8 2.4-2.7 4.8-8.7 4.8-12.2 0-2 .7-3.4 2-4.1 1.1-.6 2-1.7 2-2.4 0-1.5-11.8-27.7-15.2-33.8-3.4-6-6.3-6-9.9-.1-1.7 2.7-1.9 3.7-1 4.6 1 .9 1.8.5 3.6-1.8 1.3-1.6 2.6-2.7 2.9-2.4.5.5 13.6 27.7 13.6 28.2 0 .2-6.2.3-13.7.3-7.6-.1-15.8 0-18.3.1-5.8.3-14.2.3-20 0-2.5-.1-10.7-.2-18.2-.1-7.6 0-13.8-.1-13.8-.3 0-.5 13.1-27.7 13.6-28.2.3-.3 1.6.8 2.9 2.4 1.8 2.3 2.6 2.7 3.6 1.8 1.9-1.9-3.3-9.3-6.6-9.3-.3 0-1.3.9-2.3 2.1zm18.2 35.5 4.6.7v5.4c0 11.3-4.3 15.8-15 15.7-10.4 0-15.4-3.9-16.9-13.3-.5-2.5-1.2-5.4-1.5-6.3-.6-1.2-.1-1.8 1.6-2.1 3.7-.7 22.1-.8 27.2-.1zm50.9.1c3 .4 3.7.9 3.1 2.2-.4.9-1 3.7-1.5 6.2-1.5 9.4-6.5 13.3-16.9 13.3-10.7.1-15-4.4-15-15.8 0-5.4 0-5.5 3.3-5.9 5.5-.7 23-.7 27 0z" />

  </SvgIcon>
)

export default function Header() {
    return (
        <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', padding:1, justifyContent: "space-between"}}>
        <Stack direction={"row"} >
          <Link
            href="/"
            variant="h4"
            color="inherit"
            underline="none"
            fontSize={{xs:"1.225rem", sm:"2.125rem"}}
            sx={{  fontWeight:1, p:1}}
          >
            Focus Optical
            
          </Link>
          
          <Typography pt={1} fontSize={{xs:"1.225rem", sm:"2.125rem"}}><HomeIcon fontSize="inherit" /></Typography>
          
        </Stack>
        <Box pr={1}  display={"flex"} flexDirection={"column"} justifyContent="flex-start">
          <Typography fontSize={{xs:".7rem", sm:".8rem"}} lineHeight={1.5} variant="overline" >
            Rochester Hills, MI 
          </Typography>
          <Typography fontSize={{xs:".7rem", sm:".8rem"}}  lineHeight={1.5} variant="overline" textAlign={"right"} >
            Since 1984
          </Typography>
        </Box>
      </Toolbar>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: "space-evenly", fontSize:{xs:".9rem", sm:"1rem"} }}>
        <Link href="/contact" underline="none" color="inherit">
          Contact
        </Link>
        <Link href="/services" underline="none" color="inherit">
          Services
        </Link>
        <Link href="/pricing" underline="none" color="inherit">
          Insurance
        </Link>
        <Link href="/about" underline="none" color="inherit">
          About
        </Link>
      </Toolbar>
      </React.Fragment>
    )
}