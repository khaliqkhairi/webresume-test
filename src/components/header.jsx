import React, { Component } from 'react'
import {
   Grid,
   Stack,
   Avatar
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import khaliq from './../assets/DSC_0374.JPG';


export default class Header extends Component {

   render() {
      return (
         <Grid sx={{ textAlign: 'left', justifyContent: 'space-between' }} container spacing={2}>
            <Grid item xs={11}>
               <Stack spacing={2}>
                  <h1>Muhammad Khaliq Bin Mohd Khairi</h1>
                  <Stack direction="row" spacing={2}>
                     <LocationOnIcon sx={{ color: 'black' }} />
                     <h4>Cheras, Selangor</h4>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                     <EmailIcon sx={{ color: 'black' }} />
                     <h4>mdkhaliqkhairi@gmail.com</h4>
                  </Stack><Stack direction="row" spacing={2}>
                     <PhoneIcon sx={{ color: 'black' }} />
                     <h4>+60 13-336 0275</h4>
                  </Stack>
               </Stack>
            </Grid>
            <Grid item xs={1}>
               <Avatar
                  alt="Khaliq"
                  src={khaliq}
                  sx={{ width: 150, height: 150 }}
               />
            </Grid>
         </Grid>
      )
   }
}