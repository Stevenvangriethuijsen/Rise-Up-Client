import React from "react";
import LoginForm from "../components/LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/user";

class LoginFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
    hidden: "password",
    button: "Show Password",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        toggleShow={this.toggleShow}
      />
    );
  }
}
export default connect(null, { login })(LoginFormContainer);
