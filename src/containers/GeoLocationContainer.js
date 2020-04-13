import React from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/geolocation";

class GeoLocationContainer extends React.Component {
  componentDidMount() {
    this.props.getLocation();
  }
  render() {
    return (
      <div>
        <h1>Your Coordinates are</h1>
        <h3>{this.props.geolocation.latitude}</h3>
        <h3>{this.props.geolocation.longitude}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { geolocation: state.geolocation, user: state.user };
}
const mapDispatchToProps = { getLocation };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeoLocationContainer);
