import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';


export default class Education extends Component {

   render() {
      return (
         <Grid sx={{ textAlign: 'left' }} container spacing={2}>
            <Grid item xs={12}>
               <h3>EDUCATION</h3>
               <Divider />
               <Stack spacing={2}>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>Bachelor of Computer Science (Computer Network)</h4>
                        <h4>2018 – 2022</h4>
                     </Stack>
                     <i>Universiti Putra Malaysia</i>
                     <span>•CGPA: 3.67</span>
                     <span>•Related coursework: Network Analysis and Design, Network Security, Database Application Development,Internetworking, Mobile Application Development.</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>Foundation in Science and Agricultural Studies</h4>
                        <h4>2017 – 2018</h4>
                     </Stack>
                     <i>Universiti Putra Malaysia</i>
                     <span>•CGPA: 3.0</span>
                     <span>•MUET: Band 4</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>Sijil Pelajaran Malaysia</h4>
                        <h4>2016</h4>
                     </Stack>
                     <i>MRSM Serting</i>
                     <span>•6A 3B(Science Stream)</span>
                  </Stack>
               </Stack>
            </Grid>
         </Grid>
      )
   }
}