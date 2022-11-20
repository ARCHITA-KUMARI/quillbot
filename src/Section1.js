import React from "react";
import { useState } from "react";
import { Box, Grow } from "@mui/material";


const Section1 = () => {

    const [checked, setChecked] = useState(false);

    return (
        <Box sx={{ display: 'flex'}}  >
        
          <img src='https://images.ctfassets.net/1e6ajr2k4140/5EzkY6szmVKU40XPN5gi0Y/46b9ad689f271bbf6fd6877477572657/prod-ex-grammar.png' 
          alt='example' sx={{px: 6 , ml:6}} height='50%' width='100%'
           />
        
   
</Box>
    )
}

export default Section1;