import React from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/geolocation";
import { userLocations } from "../actions/userlocations";
import GeoLocation from "../components/GeoLocation";

class GeoLocationContainer extends React.Component {
  onSubmit = () => {
    console.log("i am clicked");
    this.props.getLocation();
    this.props.userLocations();
  };

  render() {
    return (
      <GeoLocation
        onSubmit={this.onSubmit}
        geolocation={this.props.geolocation}
      />
    );
  }
}

function mapStateToProps(state) {
  return { geolocation: state.geolocation, user: state.user };
}
const mapDispatchToProps = { getLocation, userLocations };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeoLocationContainer);
