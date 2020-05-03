// react libraries
import React from "react";

const RegisterForm = props => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onChange,
    register
  } = props
  return (
    <fieldset>
      <legend> Register </legend>
      <form onSubmit={register}>
        <div className="name">
          <label> Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="email">
          <label> Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="password">
          <label> Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="confirm-password">
          <label> Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
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
  )
}

export default RegisterForm;
