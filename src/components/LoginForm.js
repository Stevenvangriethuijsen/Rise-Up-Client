import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Log in here</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.props.values.email}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            Password
            <input
              type={this.props.values.hidden}
              name="password"
              placeholder="password"
              value={this.props.values.password}
              onChange={this.props.onChange}
            />
            <button onClick={this.props.toggleShow}>
              {this.props.values.button}
            </button>
          </label>
          <input type="submit" value="Log in"></input>
        </form>
      </div>
    );
  }
}

export default LoginForm;
