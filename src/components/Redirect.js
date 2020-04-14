import React from "react";
import { Link } from "react-router-dom";

class Redirect extends React.Component {
  render() {
    return (
      <div>
        <h1>Please log in or sign up first</h1>

        <Link to="/">
          <button>Click here to go back</button>
        </Link>
      </div>
    );
  }
}

export default Redirect;
