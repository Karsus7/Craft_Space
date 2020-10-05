import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./pages/posts";
import AllPosts from "./pages/AllPosts";
import PostData from "./pages/PostData";
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/Navbar";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
            </Switch>
        <div>
          <ButtonAppBar />
          <Switch>
            <Route exact path={["/"]}>
              <Posts />
            </Route>
            <Route exact path="/posts/:id">
              <PostData />
            </Route>
            <Route exact path="/AllPosts">
              <AllPosts />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
