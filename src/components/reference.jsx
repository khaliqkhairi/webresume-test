import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';

export default class Reference extends Component {

   render() {
      return (
         <Grid sx={{ textAlign: 'left' }} container spacing={2}>
            <Grid item xs={12}>
               <h3>REFERENCES</h3>
               <Divider />
               <Stack spacing={2}>
                  <Stack>
                     <Stack direction='row'>
                        <b>YM Raja Azlina Raja Mahmood</b>, <i>Academic Advisor</i>, <text>Universiti Putra Malaysia</text>
                     </Stack>
                     <span>raja_azlina@upm.edu.my, +603-97691768</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row'>
                        <b>Beng Soon Chuah</b>, <i>Senior Executive</i>, <text>Carigali Hess Operation Company</text>
                     </Stack>
                     <span>chuahbs@choc.com.my, +603-21791234</span>
                  </Stack>
               </Stack>
            </Grid>
         </Grid>
      )
   }
}