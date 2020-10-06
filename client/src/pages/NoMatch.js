import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function NoMatch() {
  return (
    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }}>
    <Grid item md={12} md={12}>
    <Box bgcolor="info.main" >
  <React.Fragment>
  <CssBaseline/>

  <div style={{textAlign:"center", 
          height:"300px", 
          width:"flex", 
          color:"white", 
          marginTop:"0",
          backgroundImage:`url(https://freerangestock.com/sample/87961/man-crafting-wood.jpg)` }}>
          
           </div>
            <h1>This page does not exist</h1>
            <h1>
              <span role="img" aria-label="Dissapointed Face">
                😢
              </span>
            </h1>
           
            <Link to="/">Go to Main Page</Link>
        
            </React.Fragment>
         </Box>
       </Grid>
     </Typography>
  );
}

export default NoMatch;
