// This is the page for looking at a specific post
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function PostData(props) {
  const [post, setPost] = useState({})

  // When this component mounts, grab the post with the _id of props.match.params.id
  // e.g. localhost:3000/posts/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getPost(id)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [])

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


              <h1 style={{marginLeft:"30px"}}>
                {post.title} 
                <br></br>
                posted by {post.username}
                <br></br>
                {post.date}
              </h1>
          
          
        <Grid item md={12} md={8}>
          <Box>
            <article style={{marginLeft:"30px" , border: "5px solid" , padding:"10px 10px 10px 10px"}} >
              {/* <h1>content</h1> */}
              <p>
                {post.content}
              </p>
              <img className="avatar" src={post.photo} alt="post" />            
            </article>
        
            <Link to="/">← Back to Posts</Link>
            </Box></Grid>
            </React.Fragment>
         </Box>
       </Grid>
     </Typography>
    );
  }


export default PostData;
