import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/map">
          <button>map</button>
        </Link>
        <Link to="/about">
          <button>about</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
