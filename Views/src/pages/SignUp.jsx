/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import API from "../Api";
import { Link } from "react-router-dom";

import GoogleAuth from "../components/GoogleAuth";
import "../../public/signin/signin.css";

function SignUp() {
  const myApi = `${API}/add/user`;
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.name || !userData.username || !userData.password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(myApi, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.status === 200) {
        const myData = await response.json();
        console.log(myData);
        localStorage.setItem("status", false);
        localStorage.setItem("user", myData.data.name);
        localStorage.setItem("role", myData.data.role);
        localStorage.setItem("userID", myData.userID);
        localStorage.setItem("email", myData.data.username);
        alert("Signup Successful!...");
        window.location.href = "/";
      } else if (response.status === 409) {
        alert("User already exists. Please login...");
        window.location.href = "/signin";
      } else {
        setErrorMsg("Please check your Email or password");
        window.location.href = "/signup";
      }
    } catch (error) {
      setErrorMsg("Please try again later");
    }
  };

  return (
    <div className="container">
      <div className="left_side">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <label>
            Name{" "}
            <input
              type="text"
              name="name"
              id="name"
              value={userData.name}
              placeholder="Your Full Name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </label>
          <label>
            E-mail{" "}
            <input
              type="email"
              name="username"
              id="username"
              value={userData.username}
              placeholder="Your E-mail"
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </label>
          <label>
            Password{" "}
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              placeholder="Your Password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </label>
          {<h4>{errorMsg && <p>{errorMsg}</p>}</h4>}
          <div>
            <button type="submit">Register</button>
            <Link to={"/signin"} className="login_link">
              Login
            </Link>
          </div>
        </form>
      </div>
      <GoogleAuth />
    </div>
  );
}

export default SignUp;
