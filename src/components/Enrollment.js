import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Box, Grid, Button } from "@mui/material";

const Enrollment = () => {
  return (
   <Container maxWidth={false} sx={{ paddingRight: "0px", paddingLeft: "0px" }} disableGutters>
         <Box sx={{ bgcolor: '#dddbda', height: '62px', width: '1' }}>
           <Grid item size={1}>
               <Button variant="text">About us</Button>
             </Grid>
           <Grid container spacing={2} style={{ display: "flex", alignItems: "center", height: '62px' }}>
             
               <img
                 srcSet={`image1.png`}
                 src={`image1.png`}
                 alt='Image1'
                 /*height={50}*/
               />
            
            </Grid>
         </Box>
         <Box sx={{ bgcolor: '#dddbda', height: '62px', width: '1' }}>
           <Grid container spacing={2} style={{ display: "flex", alignItems: "center", height: '62px' }}>
             <Grid item style={{ display: "flex", alignItems: "center",  paddingLeft: "63px" }} size={9}>
               <img
                 srcSet={`logo.png`}
                 src={`logo.png`}
                 alt='Logo'
                 height={50}
               />
             </Grid>
             <Grid item size={1}>
               <Button variant="text">About us</Button>
             </Grid>
           </Grid>
         </Box>
       </Container>
  );
};

export default Enrollment;