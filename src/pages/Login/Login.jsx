import React, { useState } from "react";

import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <>
      <div className="login">
        <img src={logo} alt="" className="login-logo" />

        {/* LOGIN FORM */}
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" ? (
              <input type="text" placeholder="Full Name" required />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  sign up
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  sign in
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
