import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import LoginFormContainer from "./LoginFormContainer";
// import SignUpFormContainer from "./SignUpFormContainer";

class Homepage extends React.Component {
  render() {
    if (this.props.user !== "") {
      return (
        <div>
          <h1>You are logged in</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>please log in</h1>
          {/* <SignUpFormContainer /> */}
          {/* <LoginFormContainer /> */}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps)(Homepage);
