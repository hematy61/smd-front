import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
      error: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    if (this.state.email && this.state.password) {
      axios
        .post(`http://localhost:4000/users/login`, user)
        .then(response => {
          let userresponse = response.data;
          if (userresponse.message) {
            this.setState({ error: userresponse.message });
          } else if (userresponse.user) {
            sessionStorage.setItem("data", JSON.stringify(userresponse));
            this.setState({ redirectToReferrer: true });
          }
        }, this)
        .catch(error => {
          alert(error)
        });
    }
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/user"} />;
    }
    if (sessionStorage.getItem("data")) {
      return <Redirect to={"/user"} />;
    }
    const { error } = this.state;
    return (
      <div class="container center">
        <div class="card">
          <div class="card-header">Login Form</div>
          <div class="card-body">
            <form ref="formdemo" onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button type="button" class="btn btn-link"><Link to="/signup">Create Account</Link></button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
