import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  var [input, setInput] = useState({});
  var baseurl = import.meta.env.VITE_API_BASE_URL;
  var navigate=useNavigate();
  const inpuHandler = (e) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const addhandler = () => {
    console.log("Clicked");
    axios
      .post(`${baseurl}/api`, input)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/L')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "White",
          boarderRadius: 2,
          marginTop: 5,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          PRODUCT APP
        </Typography>
        <Typography variant="h5" gutterBottom>
          Signup Form
        </Typography>
        <TextField
          fullWidth
          label="Fullname"
          variant="outlined"
          margin="normal"
          name="fname"
          onChange={inpuHandler}
        ></TextField>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          name="ename"
          onChange={inpuHandler}
        ></TextField>

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          onChange={inpuHandler}
        ></TextField>
        <Button
          onClick={addhandler}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Sign Up
        </Button>
        <br />
        <br />
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Already a user?
          <Link to="/L">LOGIN </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Signup;
