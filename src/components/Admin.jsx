// import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const Admin = () => {
  const [input, setProductdata] = useState({
    pname: '',
    price: '',
    description: '',
    stock: '',
    available: true,
  });

  const inputHandler = (e) => {
    setProductdata({...input,[e.target.name]:e.target.value})
    console.log(input)
  };

  // const handleToggle = () => {
  //   setInput((prev) => ({ ...prev, available: !prev.available }));
  // };

  const submithandler = (e) => {
    const formData= new FormData();
    formData.append('pname',input.pname)
    formData.append('price',input.pname)
    formData.append('stock',input.pname)
    formData.append('description',input.pname)
    input.images.forEach((file)=>{
      formData.append("images",file)
    })
    axios.post(`${baseurl}`,formData)
    console.log('Submitted:', input);
    // TODO: Add your API call here
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        padding: 4,
        backgroundColor: '#fdfdfd',
        borderRadius: 3,
        marginTop: 8,
        boxShadow: 4,
      }}
    >
      <Typography variant='h4' gutterBottom align='center'>
        <b>Add Product</b>
      </Typography>

      <form onSubmit={submithandler}>
        <TextField
          fullWidth
          label='Product Name'
          variant='outlined'
          margin='normal'
          name='pname'
          value={input.pname}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Price'
          type='number'
          variant='outlined'
          margin='normal'
          name='price'
          value={input.price}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Description'
          variant='outlined'
          margin='normal'
          name='description'
          value={input.description}
          onChange={inputHandler}
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          label='Stock'
          type='number'
          variant='outlined'
          margin='normal'
          name='stock'
          value={input.stock}
          onChange={inputHandler}
          required
        />
        <FormControlLabel
          control={
            <Switch
             color='warning'
            />
          }
          label='Available'
          sx={{ color: 'black', mt: 1 }}
        />
        <Button variant='outlined' component="label">
          Upload Images
          <input type='file'
          hidden
          multiple
          accept='images/*'
          onChange={(e)=>{
            setProductdata({...productData,
              image:Array.from(e.target.files)
            })
          }}
          />
        </Button>

        

        <Button
          fullWidth
          type='submit'
          variant='contained'
          color='secondary'
          sx={{ mt: 3 }}
          onClick={submithandler}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Admin;
