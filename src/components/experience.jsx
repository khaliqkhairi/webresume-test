import React, { Component } from 'react'
import {
   Divider,
   Grid,
   Stack,
} from '@mui/material';


export default class Experience extends Component {

   render() {
      return (
         <Grid sx={{ textAlign: 'left' }} container spacing={2}>
            <Grid item xs={12}>
               <h3>WORKING EXPERIENCE</h3>
               <Divider />
               <Stack spacing={2}>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                        <h4>Technical Analyst</h4>
                        <h4>12/2022 – present</h4>
                     </Stack>
                     <i>AIA Shared Services Sdn Bhd</i>
                     <span>•Develop and maintain existing program. (IBM AS400)</span>
                     <span>•Design and code programs from technical specification.</span>
                     <span>•Fix production incident tickets.</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                     <h4>Internship Trainee</h4>
                     <h4>03/2022 – 08/2022</h4>
                     </Stack>
                     <i>Carigali Hess Operating Company Sdn Bhd</i>
                     <span>•Appointed in Operation Excellence department, as data science intern.</span>
                     <span>•Working on robotic process automation, data/software, and machine learning</span>
                     <span>•Assisted in analyzing the data using Python.</span>
                     <span>•Experience in analyzing data from excel sheets and visualize the data.</span>
                     <span>•Involved in some process automation projects with other departments.</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                     <h4>Food Delivery Courier</h4>
                     <h4>2019 – 2021</h4>
                     </Stack>
                     <i>Foodpanda Malaysia Sdn Bhd</i>
                     <span>•Handle food and beverages with care and safe arrival.</span>
                     <span>•Responsible towards the item received and delivered to the customer</span>
                  </Stack>
                  <Stack>
                     <Stack direction='row' justifyContent='space-between'>
                     <h4>Store Associate</h4>
                     <h4>06/2018 – 08/2018</h4>
                     </Stack>
                     <i>7-Eleven Malaysia Sdn Bhd</i>
                     <span>•Manage store with or without supervision of store managers.</span>
                     <span>•Give assistance to customers request.</span>
                  </Stack>
               </Stack>
            </Grid>
         </Grid>
      )
   }
}