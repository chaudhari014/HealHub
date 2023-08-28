/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";
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
        const data = await response.json();
        console.log(data);
        localStorage.setItem("status", false);
        localStorage.setItem("user", data.name);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userID", data.userID);
        localStorage.setItem("email", data.email);
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
      <GoogleAuth />
    </div>
  );
}

export default SignIn;
