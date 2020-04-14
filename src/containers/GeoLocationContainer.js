import React from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/geolocation";
import Redirect from "../components/Redirect";
import GeoLocation from "../components/GeoLocation";

class GeoLocationContainer extends React.Component {
  onSubmit = () => {
    console.log("i am clicked");
    this.props.getLocation();
  };

  render() {
    if (this.props.user !== "") {
      return (
        <div>
          <GeoLocation
            onSubmit={this.onSubmit}
            geolocation={this.props.geolocation}
          />
        </div>
      );
    } else {
      return <Redirect />;
    }
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
