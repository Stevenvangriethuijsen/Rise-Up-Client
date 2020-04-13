import React from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class DisplayMap extends React.Component {
  state = {
    zoom: 15,
  };
  render() {
    return (
      <Map
        center={[
          this.props.geolocation.latitude,
          this.props.geolocation.longitude,
        ]}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return { geolocation: state.geolocation, user: state.user };
}

export default connect(mapStateToProps)(DisplayMap);
