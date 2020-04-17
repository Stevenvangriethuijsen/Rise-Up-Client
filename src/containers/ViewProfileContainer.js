import React from "react";
import { connect } from "react-redux";
import ViewProfile from "../components/ViewProfile";

class ViewProfileContainer extends React.Component {
  render() {
    return <ViewProfile />;
  }
}
export default connect(null, {})(ViewProfileContainer);
