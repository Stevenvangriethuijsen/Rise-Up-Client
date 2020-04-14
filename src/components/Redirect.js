import React from "react";
import { Link } from "react-router-dom";

class Redirect extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Please Log in or Sign up first</Link>
      </div>
    );
  }
}

export default Redirect;
