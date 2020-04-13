import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Homepage} />
      </div>
    );
  }
}

export default App;
