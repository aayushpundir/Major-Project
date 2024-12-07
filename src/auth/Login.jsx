import React from 'react';
import { Container, Grid, TextField, Button, Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container
     maxWidth="md"
     sx={{ display:"flex", alignItems:"center", height:"100vh" }}
    >
      <Grid container>
        <Grid item md={6}>
          <Paper
            square
            sx={{
              bgcolor:"primary.main",
              color:"primary.contrastText",
              height:"100%",
              display:"flex",
              alignItems:"center"
            }}
          >
              <Box
                sx={{ p:5, textAlign:"center" }}
              >
                <Box sx={{ display:"flex", justifyContent:"center" }}>
                  <svg width="50" height="50" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                </Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight:"600", mt:1 }}>
                Chat App
              </Typography>

              <p>Connect, Collaborate, Communicate - Seamlessly!</p>

              </Box>
          </Paper>
        </Grid>
        
        <Grid item md={6}>
          <Paper square sx={{ height:"100%", display:"flex", alignItems:"center", flexDirection:"column" }}>
            <Box sx={{ p:5 }}>
              <Typography variant='h5' sx={{ mb:2, fontWeight:"500", textTransform:"uppercase" }}>Login</Typography>
              <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              sx={{mb:3}}
              />

              <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              sx={{mb:3}}
              />

              <Button fullWidth variant="contained" sx={{ py:2 }}>Log In</Button>

              <Button sx={{ mt:1 }}>Forgot Password</Button>

            </Box>
            <Box>
              <Typography>Don't Have an Account ?<Button onClick={ () => navigate("/register")}>Create Account</Button></Typography>
            </Box>

          </Paper>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;