import React from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class DisplayMap extends React.Component {
  state = {
    zoom: 15,
  };
  render() {
    const position = [
      this.props.geolocation.latitude,
      this.props.geolocation.longitude,
    ];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Hey there {this.props.user.name} <br /> You are here!
          </Popup>
        </Marker>
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return { geolocation: state.geolocation, user: state.user };
}

export default connect(mapStateToProps)(DisplayMap);
