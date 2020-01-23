import React from "react";
import Login from "./components/login";
import User from "./components/user";
import Signup from "./components/signup";
import Notfound from "./components/notfound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './index.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="#">
          Demo
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                LogIn
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user">
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/user" component={User} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
