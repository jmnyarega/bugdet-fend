// react libraries
import React from 'react';

// components
import RegisterForm from "./RegisterForm";

// css
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
    });
  }

  register = e => {
    e.preventDefault();
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
        <RegisterForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          name={name}
          onChange={this.onChange}
          register={this.register}
        />
      </div>
    )
  }
}

export default Register;
