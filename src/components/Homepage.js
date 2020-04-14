import React from "react";
import Navbar from "./Navbar";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Welcome</h1>
          <p>
            Rise up is an Application designed to connect you with like minded
            peers and enable you to find climbing partners, training partners
            and maybe friends in your area
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
