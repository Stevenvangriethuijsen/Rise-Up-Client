import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { userLocations } from "../actions/userlocations";
import { getUsers } from "../actions/user";
class DisplayMap extends React.Component {
  state = {
    zoom: 15,
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.userLocations();
  }

  singleUser = (geolocationObject) => {
    const name = this.props.users.find(
      (user) => user.userId === geolocationObject.userId
    );
    // console.log(name);
    return name.name;
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
                <Link to={`profile/${user.userId}`}>
                  Hi I'm {this.singleUser(user)}
                  <br />
                  Check me out!
                </Link>
              </Popup>
            </Marker>
          ))}

        <Marker position={position}>
          <Popup>
            Hey there {this.props.user.name} <br /> You are here!
          </Popup>
        </Marker>

        {/* {this.props.users
          .filter((user) => user.location.latitude !== null)
          .map((user) =>
            console.log(
              `${user.name} is at the following coordinates ${user.location.latitude} x ${user.location.longitude}`
            )
          )} */}
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return {
    geolocation: state.geolocation,
    user: state.user,
    userlocations: state.userlocations,
    users: state.users,
  };
}
const mapDispatchToProps = { userLocations, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMap);
