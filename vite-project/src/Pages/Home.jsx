import React, { useContext, useState } from 'react'
import BookForm from '../Components/BookForm';
import AllData from '../Context/Context';
//Grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
//grid

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

//list  
 const  data = [
  { id: 1, book: 'C++', topics: ['Introduction', 'Startup info'] },
  { id: 2, book: 'PF', topics: ['3d Array', 'Auto Grow', 'Pointers'] },
  { id: 3, book: 'OOP', topics: ['Object ', 'Components', 'Classes'] },
  { id: 4, book: 'DSA', topics: ['Time Complacity', 'Trees', 'linkList'] },
  { id: 5, book: 'Web Development', topics: ['MEANS Stack', 'Python', 'HTML'] },
];


function Home() {
  // const {BookForm}= useContext(AllData);
  // const data = {...BookForm};
  return (
    <>
    
      <div className='pt-6' >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} sm={8} md={9}>
          <Item
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src='src/Images/Home.jpeg'
              alt="Home"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
                
              }}
            />
            
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item
            sx={{

              height: '100%', 
              display: 'flex',
              overlay: 'none',
              flexDirection: 'column',
            }}
          >
            <List
              sx={{


                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: '300px',
                overflowy: 'none', 
              }}
              subheader={<li />}
            >
              {data.map(({ id, book, topics }) => (
                <li key={`section-${id}`}>
                  <ul>
                    <ListSubheader>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {book}
                      </Typography>
                    </ListSubheader>
                    {topics.map((topic, index) => (
                      <ListItem key={`item-${id}-${index}`}>
                        <ListItemText primary={topic} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  {/*Second Grid*/}
     <div className='mt-5'>
     <Typography
       sx={{ width: 'auto', textAlign: 'center',  fontSize: {
        xs: '1.2rem',sm: '1.6rem',md: '2rem',lg: '2.5rem', 
      },   fontWeight: 'bold' }} 
      component="h4"> Let's Explore our books   </Typography>
      <BookForm/>
     </div>
      </>
  )
}

export default Home