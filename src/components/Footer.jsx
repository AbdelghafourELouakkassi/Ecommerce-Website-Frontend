import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';   

export default function Footer(){   
  const year=new Date().getFullYear()   
  return ( 
  <Box sx={{ bgcolor:"black",height:'auto', }} mt={10} py={1}>
    <Stack>
      <Typography color={"white"} mx={"auto"} textAlign={"center"} px={2} py={2}>
        Designed and Developed By Abdelghafour Elouakkassi
      </Typography>
      <Stack color={"white"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={4} >
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
      </Stack>
      <Typography mx={"auto"} py={2} color={"white"}>
        &copy; {year}
      </Typography>
    </Stack>
  </Box>

  )
}