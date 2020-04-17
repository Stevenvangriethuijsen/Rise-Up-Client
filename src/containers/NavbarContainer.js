import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { logoutUser } from "../actions/user";

class NavbarContainer extends React.Component {
  onSubmit = (event) => {
    console.log("the logout button is clicked");
    this.props.logoutUser();
  };

  test = () => {
    console.log("i am testing a new button");
  };

  render() {
    return <Navbar onSubmit={this.onSubmit} />;
  }
}
export default connect(null, { logoutUser })(NavbarContainer);
