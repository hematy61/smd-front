import React from "react";
import { Redirect } from "react-router-dom";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem("data"));
    this.state = {
      email: (user && user.user && user.user.email) || "",
      isLoaded: false,
      redirectToReferrer: false,
      token: ""
    };
  }

  logout = () => {
    sessionStorage.setItem("data", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  };

  render() {
    if (
      this.state.redirectToReferrer ||
      sessionStorage.getItem("data") == null
    ) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div>
        <h1>welcome {this.state.email}</h1>
        <button type="button" onClick={this.logout} className="btn btn-primary">
          Log Out
        </button>
      </div>
    );
  }
}
