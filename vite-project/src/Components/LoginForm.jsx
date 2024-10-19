import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Link, Divider, Stack, Alert } from '@mui/material';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import AllData from '../Context/Context';

//testing 
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

function LoginForm() {
  // All data
  const { UserData } = useContext(AllData);
  const [FieldData, SetFieldData] = useState({
    Email: '',
    Password: '',
  });
  const navigate = useNavigate();

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // State for alert visibility
  const [showAlert, setShowAlert] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setPasswordAlert] = useState(false);
  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Prevent default mouse down event for password field
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Receiving data from Field
  const HandleChange = (event) => {
    const { name, value } = event.target;
    SetFieldData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (FieldData.Email !== UserData.email) {
      
      setAlertEmail(true);
    } else if (FieldData.Password !== UserData.password) {
    
      setPasswordAlert(true);
    } else {
      alert('Login successful!');
      navigate('/Home');
    }
  };

  // Change page to sign-up form
  const changePage = () => {
    navigate('/SignUpForm');
  };

  // Handle forgot password click and show alert
  const handleForgotPasswordClick = () => {
    setShowAlert(true);
  };

  return (
  <>
    {/*new*/}

    {/*new*/}
    <div className='p-6 bg-slate-200 rounded-3xl'>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '350px',padding:5, mx:'auto', mt: 'auto' ,backgroundColor:'white',borderRadius:5}}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sign in
        </Typography>
        <TextField
          label="Email"
          value={FieldData.Email}
          onChange={HandleChange}
          name="Email" // Changed to match the state key
          type="email"
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          name="Password" // Changed to match the state key
          value={FieldData.Password}
          onChange={HandleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {alertPassword && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
            
      <Alert variant="filled" severity="error">
        Password Does not match
      </Alert>
          </Stack>
        )}
        {alertEmail && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
            
      <Alert variant="filled" severity="error">
        Email does not match recheck email
      </Alert>
          </Stack>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Link variant="body2" onClick={handleForgotPasswordClick}>
            Forgot your password?
          </Link>
        </Box>

        {/* Conditional alert when "Forgot your password?" is clicked */}
        {showAlert && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
            <Alert variant="filled" severity="warning">
              Please contact the library to recover your password.
            </Alert>
          </Stack>
        )}

        <Button sx={{ backgroundColor: 'red' }} type="submit" variant="contained" fullWidth>
          <LoginSharpIcon /> &nbsp;
          Sign in
        </Button>
        <Divider>or</Divider>
        <Button onClick={changePage} sx={{ mt: 2, backgroundColor: 'red' }} variant="contained" fullWidth>
          <PersonAddSharpIcon /> &nbsp;
          New in library
        </Button>
      </Box>
    </div>
    
    </>
  );
}

export default LoginForm;