import React from 'react';

import "./index.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state);
    });
  }

  register = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      name,
    } = this.state;
    return (
      <div className="register-page">
        <fieldset>
          <legend> Register </legend>
          <form onSubmit={this.register}>
            <div className="name">
              <label> Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </label>
            </div>
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
            <div className="confirm-password">
              <label> Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
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

export default Register;
