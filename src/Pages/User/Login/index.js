// react libraries
import React from 'react';
import { connect } from "react-redux";

// actions
import { login } from "../../../actions/users/login";

// components
import LoginForm from "./LoginForm";

// css
import "./index.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state);
    });
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <LoginForm
          email={email}
          password={password}
          onChange={this.onChange}
          login={this.login}
        />
      </div>
    )
  }
}

const mapStateProps = state => {
  return { user: state }
}

const mapDispatchToProps = dispatch => {

  return { login: data => dispatch(login(data)) }
}

export default connect(mapStateProps, mapDispatchToProps)(Login)
