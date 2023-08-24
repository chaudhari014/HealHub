/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import API from "../Api";

function SignIn() {
  const myApi = `${API}/add/user`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const payload = {
      email: email,
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
      } else {
        console.error("Login failed");
      }
    } catch (error) {
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
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
