import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';


export default class Skills extends Component {

   render() {
      return (
         <Stack sx={{ textAlign: 'left' }}>
            <h3>SKILLS</h3>
            <Divider />
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <Stack spacing={2}>
                     <Stack>
                        <h4>Programming</h4>
                        <span>(Java, Python, Dart, SQL, HTML)</span>
                     </Stack>
                     <Stack>
                        <h4>Prototype</h4>
                        <span>(Figma, JustInMind)</span>
                     </Stack>
                  </Stack>
               </Grid>
               <Grid item xs={6}>
                  <Stack spacing={2}>
                     <Stack>
                        <h4>Microsoft Office</h4>
                        <span>(Word, Excel, Powerpoint)</span>
                     </Stack>
                     <Stack>
                        <h4>Creative Editing</h4>
                        <span>(Word, Excel, Powerpoint)</span>
                     </Stack>
                  </Stack>
               </Grid>
            </Grid>
         </Stack>
      )
   }
}