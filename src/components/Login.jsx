import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    var[input,setInput] =useState({})
    var baseurl = import.meta.env.VITE_API_BASE_URL;
    var navigate=useNavigate();
        const inpuHandler =(e)=>{
            // console.log(e.target.value);
            setInput({...input,[e.target.name]:e.target.value})
            console.log(input)
            
        }
        const addhandler=()=>
          axios
      .post(`${baseurl}/api/login`, input)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("role",res.data.user.role)
        if(res.status===200){
          alert(res.data.message)
          if(res.data.user.role=='admin'){
            navigate('/admin')
          }else{
            navigate('/product')
        }
      }
    
      })  
      .catch((error) => {
        console.log(error);
      });
          

            console.log("Clicked")
    
  return (
    <div>
        <Box
        sx={{
            padding:2,
            backgroundColor:"White",
            boarderRadius:2,
            marginTop:5,
            boxShadow:3
        }}>
            <Typography variant='h3' color="standard" gutterBottom>WELCOME TO PRODUCT APP</Typography> 
        <Typography variant='h5' gutterBottom>Login to continue </Typography>  
        <TextField
        fullWidth
        label='Email'
        variant='outlined'
        margin='normal'
        name='ename'
        
        onChange={inpuHandler}
        >
            </TextField>
    
        <TextField
        fullWidth
        label='Password'
        variant='outlined'
        margin='normal'
        name='password'
       
        onChange={inpuHandler}>
        </TextField>
        <Button  
        onClick={addhandler}
        fullWidth 
        variant="contained"
        color='primary'>
        LOG IN
        </Button><br /><br />
      <Typography variant='h6' sx={{color:"text.secondary"}}>
        DONT HAVE AN ACCOUNT?
        <Link to={'/'}>Create an account</Link>
      </Typography>
    
      </Box>
     
      
    </div>
  )
}

export default Login

