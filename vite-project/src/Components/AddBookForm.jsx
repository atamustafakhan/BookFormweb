import React, { useState, useContext } from 'react';
import BookForm from './BookForm';
import AllData from '../Context/Context';
// Text Field
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// Upload Button
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function AddBookForm() {
  // Alert states
  const [AlertFieldupload, SetAlertFieldupload] = useState(false);
  const [AlertFieldEmpity, SetAlertFieldEmpity] = useState(false);
  
  // Setting books data from context
  const { SetBookData } = useContext(AllData);
  
  // Temporary book data for the form
  const [BookDataTemp, SetBookDataTemp] = useState({
    Title: '',
    Author: '',
    Genre: '',
    YearOfPublication: '',
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    SetBookDataTemp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Upload button function
  const upload = (event) => {
    event.preventDefault();
    if (BookDataTemp.Title && BookDataTemp.Author && BookDataTemp.Genre && BookDataTemp.YearOfPublication) {
      // Update the context state with the new book
      SetBookData((prevBooks) => [
        ...prevBooks,
        {
          Title: BookDataTemp.Title,
          Author: BookDataTemp.Author,
          Genre: BookDataTemp.Genre,
          YearOfPublication: BookDataTemp.YearOfPublication,
        },
      ]);
      SetAlertFieldupload(true);
      SetAlertFieldEmpity(false);

      // Reset the temporary book data
      SetBookDataTemp({
        Title: '',
        Author: '',
        Genre: '',
        YearOfPublication: '',
      });
    } else {
      SetAlertFieldEmpity(true);
      SetAlertFieldupload(false);
    }
  };

  return (
    <>
    
      <div>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '30ch', bgcolor: 'e3f2fd' } }}
          noValidate
          autoComplete="off"
        >
          {/* Heading */}
          <Typography
            sx={{
              width: 'auto',
              textAlign: 'center',
              fontSize: {
                xs: '1.2rem', sm: '1.6rem', md: '2rem', lg: '2.5rem',
              },
              fontWeight: 'bold',
            }}
            component="h4"
          >
            Add Books
          </Typography>

          {/* Alerts */}
          {AlertFieldupload && (
            <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
              <Alert variant="filled" severity="success">
                Your Book Title = {BookDataTemp.Title} Uploaded Successfully
              </Alert>
            </Stack>
          )}
          {AlertFieldEmpity && (
            <Stack sx={{ width: 'auto' }}>
              <Alert variant="filled" severity="error">
                Please Fill All the fields
              </Alert>
            </Stack>
          )}

          <TextField
            label="Title"
            onChange={handleInputChange}
            name='Title'
            value={BookDataTemp.Title}
            placeholder="Title"
            focused
          />
          <TextField
            label="Author"
            onChange={handleInputChange}
            name='Author'
            value={BookDataTemp.Author}
            placeholder="Author"
            focused
          />
          <TextField
            label="Genre"
            onChange={handleInputChange}
            name='Genre'
            value={BookDataTemp.Genre}
            placeholder="Genre"
            focused
          />
          <TextField
            label="Year Of Publication"
            onChange={handleInputChange}
            name='YearOfPublication'
            value={BookDataTemp.YearOfPublication}
            placeholder="Year of publication"
            focused
          />
        </Box>
          {/* Button */}
          <Button
            component="label"
            onClick={upload}
            variant="contained"
            startIcon={<FileUploadIcon />}
            sx={{ width: 'auto', height: '', backgroundColor: 'red',justifyContent: 'left' }}
          >
            Upload FileData
          </Button>
      </div>
      {/* Second Grid */}
      <div >
          {/* Heading */}
          <Typography
            sx={{
              marginTop: '2rem',
              width: 'auto',
              textAlign: 'center',
              fontSize: {
                xs: '1.2rem', sm: '1.6rem', md: '2rem', lg: '2rem',
              },
            }}
            component="h4"
          >
            Book List 
          </Typography>
        <BookForm />
      </div>
    </>
  );
}

export default AddBookForm;
