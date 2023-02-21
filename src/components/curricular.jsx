import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';

export default class Curricular extends Component {

   render() {
      return (
         <Grid sx={{ textAlign: 'left' }} container spacing={2}>
            <Grid item xs={12}>
               <h3>EXTRACURRICULAR</h3>
               <Divider />
               <Stack spacing={2}>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>Malaysian Vaccine Support Volunteer (MyVAC)</h4>
                        <h4>2021</h4>
                     </Stack>
                     <span>•Volunteering in ensuring a smooth process of COVID-19 Vaccination Program.</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>International Student Exchange UPM-Kyutech, Japan</h4>
                        <h4>2019</h4>
                     </Stack>
                     <span>•Involve in international university activity related to science and technology.</span>
                  </Stack>
               </Stack>
            </Grid>
         </Grid>
      )
   }
}