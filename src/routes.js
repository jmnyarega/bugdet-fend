// react libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

// components
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import Index from "./Pages/Dashboard/index";
import Categories from "./Pages/Categories/Add";
import NavBar from "./Pages/Dashboard/NavBar";
import Logout from "./Pages/User/logout";

//actions
import { getUserData } from "./actions/users/session-management";

class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_user: { }
    }
  }

  componentDidMount() {
    this.props.getUserData();
  }

  static getDerivedStateFromProps(props, state) {
    return { active_user: props.user }
  }

  protectedRoutes() {
    return (
      <Switch>
        <React.Fragment>
          <NavBar />
          <Route component={Index} exact path="/" />
          <Route component={Categories} path="/categories" />
          <Route component={Logout} path="/logout" />
        </React.Fragment>
      </Switch>
    )
  }

  publicRoutes() {
    return (
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
      </Switch>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.active_user.id
            ? this.protectedRoutes()
            : this.publicRoutes()
        }
      </div>
    )
  }
}

const mapStateProps = state => {
  return { user: state.active_user }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => { dispatch(getUserData()) }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Routers);
