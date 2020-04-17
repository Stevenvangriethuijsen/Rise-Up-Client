import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { userLocations } from "../actions/userlocations";

class DisplayMap extends React.Component {
  state = {
    zoom: 15,
  };

  componentDidMount() {
    this.props.userLocations();
  }
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

        {this.props.userlocations
          .filter(
            (user) =>
              user.latitude !== this.props.geolocation.latitude &&
              user.longitude !== this.props.geolocation.longitude
          )
          .map((user) => (
            <Marker
              key={user.userId}
              position={[user.latitude, user.longitude]}
            >
              <Popup>
                Hi I'm
                <Link to={`profile/${user.userId}`}>{user.userId}</Link>
                <br />
                Check me out!
              </Popup>
            </Marker>
          ))}
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
  return {
    geolocation: state.geolocation,
    user: state.user,
    userlocations: state.userlocations,
  };
}
const mapDispatchToProps = { userLocations };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMap);
