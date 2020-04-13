import React from "react";
import { connect } from "react-redux";
import SignUpForm from "../components/SignUpForm";
import { createUser } from "../actions/user";

class SignUpFormContainer extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
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
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { createUser })(SignUpFormContainer);
