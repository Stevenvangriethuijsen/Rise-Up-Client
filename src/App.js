import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Loginpage";
import GeoLocationContainer from "./containers/GeoLocationContainer";
import NavbarContainer from "./containers/NavbarContainer";
import About from "./components/About";
import ViewProfileContainer from "./containers/ViewProfileContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Route path="/" exact component={LoginPage} />
        <Route path="/map" exact component={GeoLocationContainer} />
        <Route path="/about" exact component={About} />
        <Route path="/profile/:id" exact component={ViewProfileContainer} />
      </div>
    );
  }
}

export default App;
