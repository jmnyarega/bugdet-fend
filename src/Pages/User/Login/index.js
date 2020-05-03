// react libraries
import React from 'react';
import { connect } from "react-redux";

// actions
import { login } from "../../../actions/users/login";

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
        <fieldset>
          <legend> Login </legend>
          <form onSubmit={this.login}>
            <div className="email">
              <label> Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="password">
              <label> Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
              </label>
            </div>
            <div className="button">
              <input
                type="submit"
                value="submit"
              />
            </div>
          </form>
        </fieldset>
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
