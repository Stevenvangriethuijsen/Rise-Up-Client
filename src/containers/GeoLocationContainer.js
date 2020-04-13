import React from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/geolocation";
import GeoLocation from "../components/GeoLocation";

class GeoLocationContainer extends React.Component {
  onSubmit = () => {
    console.log("i am clicked");
    this.props.getLocation();
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
const mapDispatchToProps = { getLocation };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeoLocationContainer);
