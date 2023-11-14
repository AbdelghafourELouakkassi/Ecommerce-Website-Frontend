import React, { useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"
import { gql, useMutation } from '@apollo/client';




  
  
function ContactUs() {   
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const CREATE_MESSAGE = gql`
    mutation CreateMessage($username:String,$email:String,$message:String){
      createMessage(data:{
        username:$username,
        email:$email,
        message:$message
      } ){
       id,username,email,message
      }
    } 
    `;

  const [createMessage, { data,error}] = useMutation(CREATE_MESSAGE);

  return (
    <Stack>
       <Typography align='center' fontSize={27} > Contact Us </Typography> 
       <Box sx={{ display:"flex",flexDirection:'column',gap:3,justifyContent:'center', alignItems:'center' }} mx={50} mt={5}  >
       {
        error && <Box color={'red'} textAlign={"center"} mb={3}>Message Not Sent</Box>
       }
       {
        data && <Box color={"blueviolet"} textAlign={"center"} mb={3}>Message Sent Successfully</Box>
       }
       <form onSubmit={(e)=>{e.preventDefault()
          createMessage({variables:{
              username:username,
              email:email,
              message:message
          }})
      
        }}>
       <TextField type='text' onChange={(e)=>setUsername(e.target.value)} required fullWidth  label="username" id="filled" />
       <TextField type='email' onChange={(e)=>setEmail(e.target.value)} required fullWidth label="Email" id="filled" sx={{ my:3 }} />
       <TextField type='text' onChange={(e)=>setMessage(e.target.value)} required fullWidth label="Message" id="filled" />
       <Button type='submit' variant="contained" sx={{ my:3 }} fullWidth  >Send</Button>
       </form>
       </Box>
    </Stack>                    
  )
}

export default ContactUs