import React from "react";
import { connect } from "react-redux";
import MyProfile from "../components/MyProfile";
import Redirect from "../components/Redirect";

class MyProfileContainer extends React.Component {
  render() {
    if (this.props.user !== "") {
      return <MyProfile />;
    } else {
      return <Redirect />;
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(MyProfileContainer);
