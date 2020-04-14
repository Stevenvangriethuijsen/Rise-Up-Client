import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/Loginpage";
import GeoLocationContainer from "./containers/GeoLocationContainer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={LoginPage} />
        <Route path="/map" exact component={GeoLocationContainer} />
        <Route path="/about" exact component={About} />
      </div>
    );
  }
}

export default App;
