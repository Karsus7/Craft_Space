import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



//import image1 from './client/public/carpenter-working.jpg';



function Posts() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [formObject, setFormObject] = useState({})

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
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savePost method to save the post data
  // Then reload posts from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.username) {
      API.savePost({
        title: formObject.title,
        username: formObject.username,
        content: formObject.content,
        photo: formObject.photo
      })
        .then(res => loadPosts())
        .catch(err => console.log(err));
    }
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
            backgroundImage:`url(https://freerangestock.com/sample/87961/man-crafting-wood.jpg)` }}>

                </div> 

                <div style={{textAlign:"center"}}>
                <h1>Make a Post Below!</h1>
              <p>To post an image, upload it to <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">
                PostImages</a>, and paste the Direct link below.</p>
                
              </div>
      
          <Container maxWidth="sm" >
        
            <form>
              <Grid item lg={12} md={6}>
                <Box>

                  <Input 
                  style={{height:"25px", 
                  width:"550px", 
                  backgroundColor:"black" , 
                  color:"darkorange" }}

                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title"
                  />
                  <Input 
                  style={{height:"25px",
                   width:"550px", 
                   backgroundColor:"black", 
                   color:"darkorange" }}

                    onChange={handleInputChange}
                    name="username"
                    placeholder="Username"
                  />
                  <Input 
                  style={{height:"25px", 
                  width:"550px" , 
                  backgroundColor:"black",
                   color:"darkorange"}}

                    onChange={handleInputChange}
                    name="photo"
                    placeholder="Paste an image link here with https://"
                  />
                  <TextArea 
                  style={{height:"250px", 
                  width:"550px" , 
                  backgroundColor:"black",
                   color:"darkorange"}}

                    onChange={handleInputChange}
                    name="content"
                    placeholder="Type Your Post Here"
                  />
                </Box>
              </Grid>


             <Grid item md={12} md={3}>
          <Box>
             <FormBtn

                disabled={!(formObject.username && formObject.title)}
                onClick={handleFormSubmit} justifyContent="center">
                Press Here To Post
              </FormBtn>
            </Box>
          </Grid> 
         
          </form>
         
           <h1>Current Posts</h1>
              {posts.length ? (
                  <List>
                  {posts.map(post => (
                    <ListItem key={post._id}>
                      <Link to={"/posts/" + post._id}>
                        <strong>
                          {post.title} 
                          {/* by {post.username} */}
                          {/* <br></br>
                          {post.content} */}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deletePost(post._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
         </Container>
         

       </React.Fragment>
      </Box>
    </Grid>
    </Typography>
   );
 }


export default Posts;
