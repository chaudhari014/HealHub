/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="login_container">
      <h2>Login User</h2>
      <form onSubmit={handleLogin}>
        <label>
          E-mail :
          <input
            type="email"
            name="username"
            id="username"
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        <Link to={"/signup"}>Register</Link>
      </form>
    </div>
  );
}

export default SignIn;
