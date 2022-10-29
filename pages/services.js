import React from "react";
import {
    Typography,
    Box,
    Chip,
    Stack,
    Button
  } from "@mui/material";
import BuildIcon from '@mui/icons-material/BuildOutlined';
import EyeIcon from '@mui/icons-material/VisibilityOutlined';
import ShopIcon from '@mui/icons-material/StoreOutlined';
import ExamIcon from '@mui/icons-material/BiotechOutlined';
import ServiceDetails from "../components/serviceDetails";
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';

function Services() {
    const [selected, setSelected] = React.useState("eye");
    const [color, setColor] = React.useState({
        'eye': true,
        'contact': false,
        'adjustments': false,
        'retail': false
    })
    function handleClick(option) {
        setSelected(option);
        setColor({
            'eye': false,
            'contact': false,
            'adjustments': false,
            'retail': false
          });
        setColor({
            [option]:true
          });
        
        
      };
    return (
            <React.Fragment>
            <Stack direction={{ sm: 'column', md: 'row' }} justifyContent="space-evenly"  >
                <Typography margin={2} variant="h4" fontWeight={1} pl={2}>
                    Services
                </Typography>
                <Stack sx={{ justifyContent: 'space-evenly' }} margin={2} direction="row" rowGap={1} spacing={{xs:0, sm:1}} flexWrap="wrap" >
                <Chip icon={<EyeIcon/>} label="Eye Exams" variant="outlined" color={color.eye ? 'primary' : 'default'} onClick={() => handleClick("eye")}  />
                <Chip  icon={<ExamIcon/>} label="Contact Exams" variant="outlined" color={color.contact ? 'primary' : 'default'} onClick={() => handleClick("contact")}  />
                <Chip icon={<BuildIcon/>} label="Free Adjustments" variant="outlined" color={color.adjustments ? 'primary' : 'default'} onClick={() => handleClick("adjustments")} />
                <Chip icon={<ShopIcon/>} label="Glasses & Contacts Retail" variant="outlined" color={color.retail ? 'primary' : 'default'} onClick={() => handleClick("retail")} />
                </Stack>
            </Stack>
            
            <ServiceDetails option={selected} ></ServiceDetails>
            <Stack alignItems="center" >
            <Button  href="/contact" variant="outlined" sx={{ m:3}} startIcon={<CalendarIcon/>}>
              Schedule an Appointment
            </Button>
            </Stack>
        </React.Fragment>
        );
};

export default Services;