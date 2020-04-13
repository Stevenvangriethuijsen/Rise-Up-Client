import React from "react";
import DisplayMap from "../containers/Map";

class GeoLocation extends React.Component {
  render() {
    if (this.props.geolocation !== "") {
      return (
        <div>
          <div>
            <h1>Your Coordinates are</h1>
            <h3>{this.props.geolocation.latitude}</h3>
            <h3>{this.props.geolocation.longitude}</h3>
          </div>
          <DisplayMap />
        </div>
      );
    } else {
      return <button onClick={this.props.onSubmit}>Find my Coordinates</button>;
    }
  }
}

export default GeoLocation;
