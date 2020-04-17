import React from "react";
import { connect } from "react-redux";
import LoginFormContainer from "../containers/LoginFormContainer";
import SignUpFormContainer from "../containers/SignUpFormContainer";
import Homepage from "./Homepage";

class LoginPage extends React.Component {
  render() {
    if (this.props.user !== "") {
      return <Homepage />;
    } else {
      return (
        <div>
          <h1>please log in or sign up</h1>
          <SignUpFormContainer />
          <LoginFormContainer />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps)(LoginPage);
