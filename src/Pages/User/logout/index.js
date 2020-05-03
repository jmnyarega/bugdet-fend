// react libraries
import React from "react";
import { connect } from "react-redux";

// actions
import { logoutUser } from "../../../actions/users/session-management";

class Logout extends React.Component {

  componentDidMount() {
    this.props.logoutUser();
    this.props.history.push("/login");
  }

  render() {
    return "logout";
  }
}

const mapDispatchToProps = dispatch => {
  return { logoutUser: () => dispatch(logoutUser()) };
}

export default connect(null, mapDispatchToProps)(Logout);
