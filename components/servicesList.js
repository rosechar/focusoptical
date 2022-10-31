import React from "react";
import {
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Stack
} from "@mui/material";
import BuildIcon from '@mui/icons-material/BuildOutlined';
import EyeIcon from '@mui/icons-material/VisibilityOutlined';
import ShopIcon from '@mui/icons-material/StoreOutlined';
import ExamIcon from '@mui/icons-material/BiotechOutlined';

function ServicesList() {
    return (
        <React.Fragment>
          <List component={Stack} direction="column" alignSelf={"center"} >
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
        </React.Fragment>
    );
    
};

export default ServicesList;