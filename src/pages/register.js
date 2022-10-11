import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./../pages/home";
import "./register.css";
import { validateEmail, validatePassword } from "../utils/utils";
import DocumentTitle from "react-document-title";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !password || !email || !confirmPassword) {
      setFlag(true);
      setError({ ...error, signinError: "All fields are mandatory" });
    } else if (!validateEmail(email)) {
      setFlag(true);
      setError({ ...error, emailError: "Email incorrect" });
    } else if (validatePassword(password) !== "") {
      setFlag(true);
      setError({ ...error, passwordError: validatePassword(password) });
    } else if (password !== confirmPassword) {
      setFlag(true);
      setError({ ...error, confirmPasswordError: "Passwords did not match" });
    } else {
      setFlag(false);
      setError({});
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      setLogin(!login);
    }
  };

  return (
    <>
      {login ? (
        <Home />
      ) : (
        <DocumentTitle title="Saabka-Bazaar">
          <>
            <div className="register-container">
              <div tabIndex="0" className="sidebar">
                <h1>Signup</h1>
                <p> We do not share your personal details with anyone </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form control"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    tabIndex="1"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form control"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    tabIndex="2"
                  />
                </div>
                <div className="form-group">
                  <label>Email </label>
                  <input
                    type="text"
                    className="form control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    tabIndex="3"
                  />
                </div>
                <p>{error.EmailError}</p>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    tabIndex="4"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form control"
                    placeholder="Confirm Password"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    tabIndex="5"
                  />
                </div>
                {flag && (
                  <div
                    data-testid="alert"
                    role="alert"
                    color="primary"
                    variant="warning"
                    tabIndex="6"
                  >
                    <></>
                    {Object.values(error).map((el, idx) => {
                      return <li key={idx}>{el}</li>;
                    })}
                  </div>
                )}
                <button tabIndex="7">Signup</button>
                Already Registered ? <Link to="/login">Login</Link>
              </form>
            </div>
          </>
        </DocumentTitle>
      )}
    </>
  );
};

export default Register;
