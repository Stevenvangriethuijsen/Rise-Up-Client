import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends React.Component {
  render() {
    return;
  }
}

function mapStateToProps(state) {
  return { geolocation: state.geolocation, user: state.user };
}

export default connect(mapStateToProps)(Map);
