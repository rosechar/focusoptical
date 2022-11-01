import React from "react";
import {
  Box
} from "@mui/material";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Box sx={{minHeight:"75vh", position: "relative"}}>
        <Header/>
        <main>{children}</main>
      </Box>
      <Footer/>
    </React.Fragment>

    
  );
};