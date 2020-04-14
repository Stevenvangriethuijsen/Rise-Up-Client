import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/Loginpage";
import GeoLocationContainer from "./containers/GeoLocationContainer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={GeoLocationContainer} />
      </div>
    );
  }
}

export default App;
