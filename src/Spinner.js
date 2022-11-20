import React from "react";
import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import './Section1a.css';


const Spinner =(props)=>{
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return(
        <div>
            <div className="hd1">
        {props.text1}
          </div>
        <div className='hd2'>
          {props.text2}
        </div>
        <div>
        <LinearProgress variant="determinate"  sx={{px: 6 , mr:6}} value={progress}/>
        </div>
        </div>
    )
}

export default Spinner;