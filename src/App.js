import React from 'react';
import './App.css';
import { Button, Grid } from '@mui/material'; 
import Section2 from './Section2';
import Section1 from './Section1';
import Section1a from './Section1a';

const App = () => {
  
  return (
    
    <div>
      <Grid container >
        <Grid item xs={6}>
        
          <header className='leftlogo'>
             <img src="https://static.wikia.nocookie.net/logopedia/images/0/07/QuillBot_2019.svg" alt="logo"  sx={{mt:8}} height='30' width='120' />

          </header>
        </Grid>
        <Grid item xs={6}>
          <header className='rightlogo'>Hello, Anish!</header> 
        </Grid>
      </Grid>
      <div style={{ backgroundImage:`url("https://grammarlyplagiarismchecker.com/images/uploads/2021-10-08/grammarly-header-pi2c-bvxvg-q6ywu.png")` ,
     backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <header className="h1" >Aim High With Brilliant Writing</header>
      <Grid align="center">
        <Button variant="contained" sx={{px: 6 , mb:6}} className="App-button">Manage Your Plan</Button>
      </Grid>

      <Grid container spacing={2} marginBottom={6}>
        <Grid xs={7} >
        <Section1 />
        </Grid>
        <Grid xs={5}>
          <Section1a/>
        </Grid>
      </Grid>
      
      <Grid>
        <Section2/>
      </Grid>


    
    </div>
    </div>
  );
}

export default App;
