import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <Link to="/map">map</Link>
      </div>
    );
  }
}

export default Navbar;
