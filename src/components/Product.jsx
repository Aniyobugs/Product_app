import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
  const[data,setProducts]=useState([]);
  var baseurl=import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get(`${baseurl}/p`) 
      .then((res) => {
        console.log(res)
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  },[]);

  return (
    <div>
            {/* <Typography variant='h1' sx={{color:'black'}}>hi</Typography> */}
            <Grid container spacing={2} sx={{marginTop:2}}>
        {data.map((value, index) => {
          return (
            <Grid size={4} key={index}>
              <Card variant="outlined">
                <CardMedia
                  sx={{ height: 250 }}
                  image={`${baseurl}/uploads/${value.image[0]}`}
                  title={value.pname}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Name:{value.pname}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Price:{value.price}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Descripation:{value.description}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Stock:{value.stock}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      
    </div>
  )
}

export default Product
