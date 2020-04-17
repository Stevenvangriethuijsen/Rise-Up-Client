import React from "react";
import { connect } from "react-redux";
import ViewProfile from "../components/ViewProfile";
import Redirect from "../components/Redirect";
class ViewProfileContainer extends React.Component {
  render() {
    if (this.props.user !== "") {
      return <ViewProfile />;
    } else {
      return <Redirect />;
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(ViewProfileContainer);
