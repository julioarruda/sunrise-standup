import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Feed from "./Feed";
import PostStatusUpdate from "./PostStatusUpdate";

import authApi from "./api/authApi";

const App = (props) => {
  const [user, setUser] = useState({ name: "" });
  useEffect(() => {
    async function getLoggedInUser() {
      const user = await authApi.getLoggedInUser();
      setUser(user);
    }
    getLoggedInUser();
  }, []);
  return (
    <div>
      <Router>
        <div className="container main">
          <Nav user={user}></Nav>
          <Switch>
            <Route path="/" exact>
              <Feed />
            </Route>
            <Route path="/post" component={PostStatusUpdate}></Route>
          </Switch>
        </div>
        <footer
          id="footer"
          className="has-background-primary has-text-centered"
        >
          <div className="is-hidden-tablet"></div>
        </footer>
      </Router>
    </div>
  );
};

export default App;
