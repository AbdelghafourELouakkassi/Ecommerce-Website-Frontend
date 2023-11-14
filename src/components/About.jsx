import React from 'react'
import {Stack,Typography} from "@mui/material"

function About() {
  return (
    <Stack>
       <Typography align="center" fontSize={27} >About us</Typography> 
       
       <Typography fontSize={25} textAlign={'center'} height={200} mt={5} mx={25} >
       MyStore is a fashion site and one of the fastest-growing eCommerce
       sites in the world. MyStore keeps things fresh with up to 100 new pieces
       on the site every single day. Plus, it's an inexpensive option with tons of
       styles under $200 and sale items sometimes go as low as just a couple of dollars!
        </Typography> 
    </Stack>
  )
}

export default About