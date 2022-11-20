import React, { useState } from "react";
import { Grid } from "@mui/material";
import Spinner from "./Spinner";

const Section1a =() => {

    const text1='Clear, confident communication';
    const text2='Take the guesswork out of great writing.';
    const text3='Comprehensive real-time feedback';
    const text4='Effective writing takes more than good grammar.';
    const text5='Support you can rely on';
    const text6='Write with a second pair of eyes that never gets tired';
    const text7='Strike the right tone';
    const text8='Make the best impression, every time.';

    

    return(
        <div>
            <Grid >
          <Spinner
          text1={text1}
          text2={text2}
         />
          </Grid>
    
      <Grid>
      <Spinner
      text1={text3}
      text2={text4}
     />
      </Grid>
      
        <Grid >
        <Spinner
        text1={text5}
        text2={text6}
        />
        </Grid>
      
        <Grid  >
        <Spinner
        text1={text7}
        text2={text8}
        />
        </Grid>
        </div>
    )
}

export default Section1a;