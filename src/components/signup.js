import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://localhost:4000/users/sign-up", user)
      .then(res => {
        let userresponse = res.data;
        if (userresponse) {
          sessionStorage.setItem("data", JSON.stringify(userresponse));
          this.setState({ redirectToReferrer: true });
        }
      }, this)
      .catch(error => alert(error));
  }

  render() {
    if (this.state.redirectToReferrer) {
      console.log("redirect thavu joiye")
      return <Redirect to={"/user"} />;
    }
    return (
      <div class="container center">
        <div class="card">
          <div class="card-header">SignUp Form</div>
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
              <button type="button" class="btn btn-link">
                <Link to="/login">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
