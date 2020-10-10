import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./pages/posts";
import AllPosts from "./pages/AllPosts";
import PostData from "./pages/PostData";
// import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
import { AuthProvider } from "./components/context/Auth";
import ProtectedRoute from "./ProtectedRoute";

=======
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
>>>>>>> 1776c833b4dfb64d31a8344085316def89088f61



function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <ButtonAppBar/>
        <Switch>
          
          <Route exact path={["/"]}>
            <Login />
          </Route>
          <Route exact path="/signup" component={SignUp} />
          
<<<<<<< HEAD
          <ProtectedRoute exact path="/posts" component={Posts} />
          
          <ProtectedRoute exact path="/posts/:id">
            <PostData />
          </ProtectedRoute>
          <ProtectedRoute exact path="/AllPosts">
            <AllPosts />
          </ProtectedRoute>
          {/* <Route>
=======
          <PrivateRoute exact path="/posts" component={Posts} />
          
          <PrivateRoute exact path="/posts/:id">
            <PostData />
          </PrivateRoute>
          <PrivateRoute exact path="/AllPosts">
            <AllPosts />
          </PrivateRoute>
          <Route>
>>>>>>> 1776c833b4dfb64d31a8344085316def89088f61
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;