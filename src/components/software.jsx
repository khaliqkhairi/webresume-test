import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';

export default class Software extends Component {

   render() {
      return (
         <Stack sx={{ textAlign: 'left' }} spacing={1}>
            <h3>SOFTWARE</h3>
            <Divider />
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <Stack spacing={2}>
                     <Stack spacing={1}>
                        <span>Flutter</span>
                        <span>GitHub</span>
                        <span>Android Studio</span>
                     </Stack>
                  </Stack>
               </Grid>
               <Grid item xs={6}>
                  <Stack spacing={2}>
                     <Stack spacing={1}>
                     <span>Microsoft Office 365</span>
                     <span>eNSP</span>
                     <span>Visual Studio Code</span>
                     </Stack>
                  </Stack>
               </Grid>
            </Grid>
         </Stack>
      )
   }
}