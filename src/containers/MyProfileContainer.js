import React from "react";
import { connect } from "react-redux";
import MyProfile from "../components/MyProfile";

class MyProfileContainer extends React.Component {
  render() {
    return <MyProfile />;
  }
}
export default connect(null, {})(MyProfileContainer);
