import React from "react";

const LoginForm = ({ email, password, onChange, login }) => {
  return (
    <fieldset>
      <legend> Login </legend>
      <form onSubmit={login}>
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

export default LoginForm;
