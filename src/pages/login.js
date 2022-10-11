import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Category from "../components/category/category";
import "./login.css";
import { validateEmail, validatePassword } from "../utils/utils";
import DocumentTitle from "react-document-title";

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail(emaillog) && !validatePassword(passwordlog)) {
      var pass = localStorage.getItem("password").replace(/"/g, "");
      var mail = localStorage.getItem("email").replace(/"/g, "");
    }
    if (!emaillog || !passwordlog) {
      setFlag(true);
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };
  return (
    <>
      {home ? (
        <Category />
      ) : (
        <DocumentTitle title="Saabka-bazaar/login">
          <div className="login-container">
            <div tabIndex="0" className="sidebar">
              <h1>Login</h1>
              <p> Get access to your Orders, Wishlist and Recommendations </p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email </label>
                <input
                  type="email"
                  className="form control"
                  placeholder="Email"
                  onChange={(e) => setEmaillog(e.target.value)}
                  tabIndex="1"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form control"
                  placeholder="Password"
                  onChange={(e) => setPasswordlog(e.target.value)}
                  tabIndex="2"
                />
              </div>
              <button tabIndex="3" type="submit">
                Login
              </button>
              {flag && (
                <div   data-testid="alert" color="primary" variant="warning">
                  Incorrect Credentials
                </div>
              )}
            </form>
          </div>
        </DocumentTitle>
      )}
    </>
  );
};

export default Login;
