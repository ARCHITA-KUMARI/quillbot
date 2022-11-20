import React from "react";
import { useState } from "react";
import { Box, Grow } from "@mui/material";
import Icon from './Icon';

const Section1 = () => {

    const [checked, setChecked] = useState(false);

    return (
        <Box sx={{ display: 'flex'}}  >
        <Grow in={checked}>
          <Icon/>
        </Grow>
   <Grow in={checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 1000 } : {})}>
    <Icon/>
  </Grow>
</Box>
    )
}

export default Section1;