import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { useNavigate } from 'react-router-dom';
import AllData from '../Context/Context';  
function SignupForm() {
  // For page shifting
  const navigate = useNavigate();
  //Alert's
  const [EmpityAlert, setEmpityAlert] = useState(false);
  const [LoginAlert, setLoginAlert] = useState(false);
  const [NameAlert, setNameAlert] = useState(false);
  const [PasswordAlert, setPasswordAlert] = useState(false);
  //error message
  const nameClick =() => {
    setNameAlert(true);
  }
  const passwordClick =() => {
    setPasswordAlert(true);
  }
  // Mapping data to Context provider object
  const { SetUserData } = useContext(AllData);

  // Local state to track form data
  const [FormData, SetFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (FormData.name.length >= 3) {
      setNameAlert(false);
    } else {
      setNameAlert(true);
    }
  
    if (FormData.password.length >= 8 && FormData.password.length <= 10) {
      setPasswordAlert(false);
    } else {
      setPasswordAlert(true);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure that the required fields are provided
    if (FormData.name && FormData.email && FormData.password) {
      SetUserData({
        name: FormData.name,
        email: FormData.email,
        password: FormData.password,
      });
      setLoginAlert(true);
      // Navigate to LoginForm page after submission
      navigate('/LoginForm');
    } else {
    setEmpityAlert(true); 
    }
  };
   
  // For navigation to the Login For
  const changePage = () => {
    navigate('/LoginForm');
  };

  return (
    <div className='p-6 bg-slate-100 rounded-3xl'>
      {/* Form submission handled through onSubmit */}
      <Box component="form" onSubmit={handleSubmit} 
      sx={{ maxWidth: '350px',padding:5, mx:'auto', mt: 'auto' ,backgroundColor:'white',borderRadius:5}}>
        <Typography variant="h4" component="h4" gutterBottom>
          Create Account        </Typography>

        {/* Conditional alert when "Empity Space?" is clicked */}
        {EmpityAlert && (
          <Stack sx={{ width: '100%', mb: 4 }} spacing={2}>
            <Alert variant="filled" severity="error">
              Please Fill All the Fields .
            </Alert>
          </Stack>
        )}
        {/* Conditional alert when "Login success" is clicked */}
        {LoginAlert && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
            <Alert variant="filed" severity="success">
              `Welcome to BookLibrary Mr.${FormData.name}`
            </Alert>
          </Stack>
        )}
        <TextField
          label="Name"
          name="name"
          value={FormData.name}
          onChange={handleInputChange}
          onClick={nameClick}
          required
          fullWidth
          sx={{ mb: 1 }}
        />
          {/* Conditional alert when "Empity Space?" is clicked */}
        {NameAlert && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
           
      <Alert variant="filled" severity="error">
          Name contain minimum 4 letters
      </Alert>
          </Stack>
        )}
        <TextField
          label="Email"
          name="email"
          type="email"
          value={FormData.email}
          onChange={handleInputChange}
          required
          fullWidth
          sx={{ mb: 1 }}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={FormData.password}
          onChange={handleInputChange}
          onClick={passwordClick}
          required
          fullWidth
          sx={{ mb: 1 }}
        />
          {PasswordAlert && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
            
      <Alert variant="filled" severity="error">
        Password Must contain 8 to 10 characters
      </Alert>
          </Stack>
        )}
        <Button
          sx={{ backgroundColor: 'red' }}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          fullWidth
        >
          <PersonAddSharpIcon/> &nbsp; 
          Sign Up
        </Button>

        <Divider>or</Divider>

        <Button
          onClick={changePage}
          sx={{ backgroundColor: 'red' }}
          variant="contained"
          fullWidth
        >
          <LoginSharpIcon/> &nbsp;
          Already Have Account
        </Button>
      </Box>
    </div>
  );
}

export default SignupForm;
