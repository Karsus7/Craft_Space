import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "../setFirebase.js";
import { AuthContext } from "../components/context/Auth";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/posts" />;
  }

  return (
    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh' }}>
      <Grid item md={12}>
        <div>
          <h1 style={{font: "Arial", marginTop: "10px" }}>Login</h1>
            <form onSubmit={handleLogin}>
              <label style={{ fontWeight: "bold" }}>
                 Email: 
                 <input name="email" type="email" placeholder="Email" />
              </label>
              <label style={{ fontWeight: "bold" }}>
                Password: 
              <input name="password" type="password" placeholder="Password" />
              </label>
              <Button style={{ backgroundColor: '#A9A9A9' }} type="submit">Login</Button>
            </form>
        </div>
      </Grid>
    </Typography>
  );
};

export default withRouter(Login);
