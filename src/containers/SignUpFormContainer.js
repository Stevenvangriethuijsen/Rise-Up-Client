import React from "react";
import { connect } from "react-redux";
import SignUpForm from "../components/SignUpForm";
import { createUser } from "../actions/user";

class SignUpFormContainer extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    hidden: "password",
    button: "Show Password",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      hidden: "password",
      button: "Show Password",
    });
  };

  toggleShow = (event) => {
    event.preventDefault();
    if (this.state.hidden === "password") {
      this.setState({ hidden: "text", button: "Hide Password" });
    } else {
      this.setState({ hidden: "password", button: "Show Password" });
    }
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        toggleShow={this.toggleShow}
      />
    );
  }
}
export default connect(null, { createUser })(SignUpFormContainer);
