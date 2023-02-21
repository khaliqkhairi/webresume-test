import React, { Component } from 'react'
import {
   Divider,
   Stack,
} from '@mui/material';


export default class Profile extends Component {

   render() {
      return (
         <Stack sx = {{textAlign: 'left'}} maxWidth="xl">
            <h3>PROFILE </h3>
            <Divider />
            <span>A Bachelor of Computer Science (Computer Network) graduate from Universiti Putra Malaysia. Currently looking for any IT/computer science related position.</span>
         </Stack>
      )
   }
}