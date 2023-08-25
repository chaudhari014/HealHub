/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { logoImage } from "../images";
import "../../public/signin/signin.css";
import API from "../Api";

function SignIn() {
  const myApi = `${API}/login`;
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(myApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.alert("login successfully...");
        window.location.href = "/";
      } else {
        setErrorMsg("check your Credentials");
        console.error("check your Credentials");
      }
    } catch (error) {
      setErrorMsg("technical issue", error);
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <div className="left_side">
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <label>
            E-mail :
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Your E-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password :
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Login</button>
            <Link to={"/signup"} className="login_link">
              Register
            </Link>
          </div>
        </form>
      </div>
      <div className="right_side">
        <div>
          <img src={logoImage} alt="logo" />
          <fieldset>
            <legend>Login With</legend>
          </fieldset>
          <button>
            <FcGoogle />
          </button>
          <p>Google</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
