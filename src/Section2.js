import React from "react";
import { Grid, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import './Section2.css';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ReactImageTooltip from "react-image-tooltip";
import img from './grammarly-bg.png'

const Section2 =() => {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

    return (
        <div>
         <Grid conatiner>
        <div align='center' className="h1">
            Up-Level Your Communication 
        </div>
        <div align='center' className="h2">
            Unlock Premium's advanced features and suggestions.
        </div>
        </Grid>
        <Grid container>
            <Grid xs={3} />
            
            <Grid xs={3}>
                 <div align='left' className="h3">
                    FOR CASUAL WRITING 
                </div>
                <div align='left' className="h4">
                    Free
                </div>
                <div align='left' className="h5">
                    Basic writing suggestions.
                </div>
            </Grid>
            <Grid xs={3}>
                <div align='left' className="h3">
                    FOR WORK OR SCHOOL
                </div>
                <div align='left' className="h4">
                    Premium
                </div>
                <div align='left' className="h5">
                    Style, tone, and clarity for writing.
                </div>
            </Grid>
            <Grid xs={3}/>
            </Grid>
            <Grid container> 
            <Grid xs={3}/>
                <Grid align="left" xs={3}>
                    <Button variant="contained" sx={{px: 8 , my:4}}  disabled>Included In Premium</Button>
                </Grid>
                <Grid align="left" xs={3}>
                    <Button variant="contained" sx={{px: 8 , my:4 }}  >Manage Your Plan</Button>
                </Grid>
            <Grid xs={3}/>
            </Grid>
            <Grid container >
            <Grid xs={3}/>
                <Grid xs={3}>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Eliminate spelling errors'>
                        <text> Spelling</text>
                    </HtmlTooltip>
                </div>
                <div align='center' className="h6">
                    <DoneIcon/> 
                    <HtmlTooltip title='Eliminate grammatical errors'>
                    <text>Grammar</text>
                    </HtmlTooltip>
                </div>
                    <div align='center' className="h6">
                <DoneIcon/> 
                <HtmlTooltip title='Eliminate punctuation errors'>
                    <text>Punctuation</text>
                    </HtmlTooltip>
                    </div>
                <div align='center' className="h6">
                    <DoneIcon/> 
                    <HtmlTooltip title='Make every sentence consice and easy to follow'>
                        <text>Conciseness</text>
                    </HtmlTooltip>
                </div>
                </Grid>
            

                <Grid xs={3}>
                <div align='center' className="h6">
                    <DoneIcon/> Everything in Free
                </div>
                <div align='center' className="h6">
                    <DoneIcon/> 
                    <HtmlTooltip title='Automatically rewrite hard-to-read sentences'>
                        <text>Clarity-focused sentence rewrites</text>
                    </HtmlTooltip>
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Eliminate hedging language or unnecesary qualifiers to sound more confident'>
                        <text>Tone adjustments</text>
                    </HtmlTooltip> 
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Ensure your work is fresh and original'>
                        <text>Plagiarism detection</text>
                    </HtmlTooltip> 
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Find vivid words to enliven each and every message'>
                        <text>Word choice</text>
                    </HtmlTooltip> 
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Write with the appropriate tone, even when you are in a hurry'>
                        <text>Formality level</text>
                    </HtmlTooltip> 
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Ensure your word choices sound natural and fluent'>
                        <text> Fluency</text>
                    </HtmlTooltip>
                </div>
                <div align='center' className="h6">
                    <DoneIcon/>
                    <HtmlTooltip title='Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback'>
                        <text> Additional advanced suggestions</text>
                    </HtmlTooltip>
                </div>
            </Grid>
            <Grid xs={3}/>
        </Grid>
        
           
            
        </div>
    )
};

export default Section2;