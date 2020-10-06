import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


function AllPosts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts()
  }, [])

  // Loads all [posts]
  function loadPosts() {
    API.getPosts()
      .then(res => 
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a post from the database with a given id, then reloads posts from the db
  function deletePost(id) {
    API.deletePost(id)
      .then(res => loadPosts())
      .catch(err => console.log(err));
  };


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

             <h1 style={{marginTop:"10px" }}>Current Posts</h1>

             <div style={{padding:"0px 0px 20px 20px"}}>



            {posts.length ? (
              <List>
                {posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} 
                        <br></br>
                        posted by {post.username} at {post.date}
                        <br></br>
                        <img className="avatar" src={post.photo} alt="post" />            
                        <br></br>
                      </strong>
                    </Link>
                    {post.content}
                    <DeleteBtn onClick={() => deletePost(post._id)} />
                  </ListItem>
                ))}
              </List>
              
            ) : (
              <h3>No Results to Display</h3>

            )}

          </div>

       </React.Fragment>
       </Box>
      </Grid>
     </Typography>
    );
  }


export default AllPosts;
