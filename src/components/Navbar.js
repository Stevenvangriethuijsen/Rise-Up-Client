import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    if (this.props.user !== "") {
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
          <button onClick={this.props.onSubmit}>logout</button>
        </div>
      );
    } else
      return (
        <div>
          <Link to="/">
            <button>home</button>
          </Link>
          <Link to="/about">
            <button>about</button>
          </Link>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps)(Navbar);
