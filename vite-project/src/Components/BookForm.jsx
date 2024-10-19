import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AllData from '../Context/Context';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// Card 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Typography
import Typography from '@mui/material/Typography';

// Grid item styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function BookForm() {
  const { BookData } = useContext(AllData);
  const [EmpityAlert, setEmpityAlert] = useState(false);

  
  useEffect(() => {
    if (BookData && BookData.length === 0) {
      setEmpityAlert(true);
    }else{
      setEmpityAlert(false);
    }

  }, [BookData]);
  return (
    <>
    
      <div className='pt-10'>
         {/* Conditional alert when "Empity Space?" is clicked */}
         {EmpityAlert && (
          <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
           
      <Alert variant="filled" severity="error">
          There is no book Listed yet 
      </Alert>
          </Stack>
        )}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            {/* Map through BookData */}
            {BookData.map((book) => (
              <Grid item xs={12} sm={6} md={3}>
                <Item
                  sx={{
                    height: '100%',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
            
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                          Title
                        </Typography>
                        <Typography variant="h5" component="div">
                          {book.Title}
                        </Typography>

                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                          Author
                        </Typography>
                        <Typography variant="h5" component="div">
                          {book.Author}
                        </Typography>

                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                          Genre
                        </Typography>
                        <Typography variant="h5" component="div">
                          {book.Genre}
                        </Typography>

                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                          Year of Publication
                        </Typography>
                        <Typography variant="h5" component="div">
                          {book.YearOfPublication}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default BookForm;


// <Grid item xs={12} sm={6} md={3} key={index}>
// <Item
//   sx={{
//     height: '100%',
//     overflow: 'auto',
//     display: 'flex',
//     flexDirection: 'column',
//   }}
// >
//   <Box sx={{ minWidth: 275 }}>
//     <Card variant="outlined">
//       <CardContent>
//         <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//           Title
//         </Typography>
//         <Typography variant="h5" component="div">

//           {Title}

//         </Typography>

//         <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//           Author
//         </Typography>
//         <Typography variant="h5" component="div">

//           {Author}

//         </Typography>

//         <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//           Genre
//         </Typography>
//         <Typography variant="h5" component="div">

//           {Genre}

//         </Typography>
//         <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//           Year of Publication
//         </Typography>
//         <Typography variant="h5" component="div">

//           {YearOfPublication}

//         </Typography>
//       </CardContent>
//     </Card>
//   </Box>
// </Item>
// </Grid>


