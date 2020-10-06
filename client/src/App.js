import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./pages/posts";
import AllPosts from "./pages/AllPosts";
import PostData from "./pages/PostData";
import NoMatch from "./pages/NoMatch";
import ButtonAppBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar/>
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
  );
}

export default App;