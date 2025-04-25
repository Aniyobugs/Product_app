import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Product = () => {
  // const[products,setProducts]=useState([]);
  // useEffect(()=>{
  //   axios.get("http://localhost:3000/p/product")
  //   .then((response)=>{
  //     setProducts(response.data);
  //   })
  //   .catch((err)=>{
  //     console.error('Error Fetching products:')
  //   }
  //   ))
  //   })
  // })
  return (
    <div>
            {/* <Typography variant='h1' sx={{color:'black'}}>hi</Typography> */}
            <Grid  container spacing={2}>
        {data.map((value,i)=>{
            return(
                <Grid size={{xs:12,md:3}}>
                <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  sx={{ height: 500 }}
                  image={value.image} 
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   {value.des}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' color='green' size="small">Share</Button>
                  <Button variant='contained' color='green' size="small">Learn More</Button>
                </CardActions>
              </Card>
              </Grid>

            )
        })}
  
  </Grid>

    </div>
  )
}

export default Product
