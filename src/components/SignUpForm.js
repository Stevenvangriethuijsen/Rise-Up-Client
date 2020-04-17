import React from "react";

class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Sign Up Now!</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            E-mail
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
          <input type="submit" value="Sign Up!"></input>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
