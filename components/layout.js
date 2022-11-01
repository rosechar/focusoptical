import React from "react";
import {
  Toolbar,
  Typography,
  Stack,
  Link,
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  SvgIcon
} from "@mui/material";
import { pink } from '@mui/material/colors';

const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...props}>
    <path d="M17.2 19.1C15.1 21.3 0 53.3 0 55.6c0 .7.9 1.8 2 2.4 1.3.7 2 2.1 2 4.1 0 3.5 2.4 9.5 4.8 12.2 4.3 4.7 14.5 7.4 21.6 5.8 8.5-2 12.7-7.8 13.5-18.5l.6-7.1h7l.6 7.1c.8 10.7 5 16.5 13.5 18.5 7.1 1.6 17.3-1.1 21.6-5.8 2.4-2.7 4.8-8.7 4.8-12.2 0-2 .7-3.4 2-4.1 1.1-.6 2-1.7 2-2.4 0-1.5-11.8-27.7-15.2-33.8-3.4-6-6.3-6-9.9-.1-1.7 2.7-1.9 3.7-1 4.6 1 .9 1.8.5 3.6-1.8 1.3-1.6 2.6-2.7 2.9-2.4.5.5 13.6 27.7 13.6 28.2 0 .2-6.2.3-13.7.3-7.6-.1-15.8 0-18.3.1-5.8.3-14.2.3-20 0-2.5-.1-10.7-.2-18.2-.1-7.6 0-13.8-.1-13.8-.3 0-.5 13.1-27.7 13.6-28.2.3-.3 1.6.8 2.9 2.4 1.8 2.3 2.6 2.7 3.6 1.8 1.9-1.9-3.3-9.3-6.6-9.3-.3 0-1.3.9-2.3 2.1zm18.2 35.5 4.6.7v5.4c0 11.3-4.3 15.8-15 15.7-10.4 0-15.4-3.9-16.9-13.3-.5-2.5-1.2-5.4-1.5-6.3-.6-1.2-.1-1.8 1.6-2.1 3.7-.7 22.1-.8 27.2-.1zm50.9.1c3 .4 3.7.9 3.1 2.2-.4.9-1 3.7-1.5 6.2-1.5 9.4-6.5 13.3-16.9 13.3-10.7.1-15-4.4-15-15.8 0-5.4 0-5.5 3.3-5.9 5.5-.7 23-.7 27 0z" />
  </svg>
  //   <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" >
  //   <path d="M17.2 19.1C15.1 21.3 0 53.3 0 55.6c0 .7.9 1.8 2 2.4 1.3.7 2 2.1 2 4.1 0 3.5 2.4 9.5 4.8 12.2 4.3 4.7 14.5 7.4 21.6 5.8 8.5-2 12.7-7.8 13.5-18.5l.6-7.1h7l.6 7.1c.8 10.7 5 16.5 13.5 18.5 7.1 1.6 17.3-1.1 21.6-5.8 2.4-2.7 4.8-8.7 4.8-12.2 0-2 .7-3.4 2-4.1 1.1-.6 2-1.7 2-2.4 0-1.5-11.8-27.7-15.2-33.8-3.4-6-6.3-6-9.9-.1-1.7 2.7-1.9 3.7-1 4.6 1 .9 1.8.5 3.6-1.8 1.3-1.6 2.6-2.7 2.9-2.4.5.5 13.6 27.7 13.6 28.2 0 .2-6.2.3-13.7.3-7.6-.1-15.8 0-18.3.1-5.8.3-14.2.3-20 0-2.5-.1-10.7-.2-18.2-.1-7.6 0-13.8-.1-13.8-.3 0-.5 13.1-27.7 13.6-28.2.3-.3 1.6.8 2.9 2.4 1.8 2.3 2.6 2.7 3.6 1.8 1.9-1.9-3.3-9.3-6.6-9.3-.3 0-1.3.9-2.3 2.1zm18.2 35.5 4.6.7v5.4c0 11.3-4.3 15.8-15 15.7-10.4 0-15.4-3.9-16.9-13.3-.5-2.5-1.2-5.4-1.5-6.3-.6-1.2-.1-1.8 1.6-2.1 3.7-.7 22.1-.8 27.2-.1zm50.9.1c3 .4 3.7.9 3.1 2.2-.4.9-1 3.7-1.5 6.2-1.5 9.4-6.5 13.3-16.9 13.3-10.7.1-15-4.4-15-15.8 0-5.4 0-5.5 3.3-5.9 5.5-.7 23-.7 27 0z" />

  // </SvgIcon>
)


function createData(day, open, close, closed) {
  return { day, open, close, closed };
}

const rows = [
  createData('Mon', "9", "6", false),
  createData('Tue', "9", "7", false),
  createData('Wed', "9", "5:30", false),
  createData('Thur', "9", "6", false)
];
const rows2 = [
  createData('Fri', "9", "5", false),
  createData('Sat', "9", "12", false),
  createData('Sun', "CLOSED", "", true)
];

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Box sx={{minHeight:"70vh", position: "relative"}}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', padding:2, justifyContent: "space-between" }}>
    <Stack direction={"row"} >
      <Link
        href="/"
        variant="h4"
        color="inherit"
        underline="none"
        fontSize={{xs:"1.225rem", sm:"2.125rem"}}
        sx={{  fontWeight:1, pl:1, pr: 1}}
      >
        Focus Optical
        
      </Link>

      <Typography width={{xs:"25px", sm:"40px"}} height={{xs:"25px", sm:"40px"}} >
      
      <HomeIcon sx={{ color: pink[500] }}></HomeIcon>
      </Typography>
      
      </Stack>
        <Box pr={1}  display={"flex"} flexDirection={"column"} justifyContent="flex-start">
        <Typography fontSize={{xs:".7rem", sm:".8rem"}} lineHeight={1.5} variant="overline" >
          Rochester Hills, MI 
        </Typography>
        <Typography fontSize={{xs:".7rem", sm:".8rem"}}  lineHeight={1.5} variant="overline" textAlign={"right"} >
          Since 1982
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
      
      
      <main>{children}</main>
      </Box>
      <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 3, md: 7 }}
  alignItems={"center"}
  backgroundColor={"lightgray"}
  justifyContent={"space-evenly"}
  padding={1}
  
>
      <Stack direction={{ xs: 'column', sm: 'row'}} padding={4}>
        <Stack direction="column">
        <Typography variant="h4" fontWeight={1}>
          Focus Optical
        </Typography>
        <Typography variant="overline"  marginLeft={2}>
          Since 1982
        </Typography>
        <Typography variant="b1"  marginLeft={2}>
        2046 W Auburn Rd,
        Rochester Hills, MI 48309
        </Typography>
        <Link href="tel:2488528830" variant="b1" underline="none" color="inherit"marginLeft={2}>
        (248) 852-8830
        </Link>
        <Typography marginTop={3} marginLeft={2} fontSize=".7rem">© 2022. <a target="_blank" href="https://icons8.com/icon/3695/glasses">Glasses</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"}>
      <TableContainer sx={{maxWidth:200}}>
        <Table >
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.day}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell size='small' component="th" scope="row" >
                  {row.day}
                </TableCell>
                {
                  row.closed
                  ? <TableCell size='small' align="right">CLOSED</TableCell>
                  : (<TableCell size='small' align="right">{row.open}-{row.close}</TableCell>)
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{maxWidth:200}}>
        <Table >
          <TableBody>
            {rows2.map((row) => (
              <TableRow
                key={row.day}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell size='small' component="th" scope="row" >
                  {row.day}
                </TableCell>
                {
                  row.closed
                  ? <TableCell size='small' align="right">CLOSED</TableCell>
                  : (<TableCell size='small' align="right">{row.open}-{row.close}</TableCell>)
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Stack>
    </Stack>
      
    </React.Fragment>

    
  );
};