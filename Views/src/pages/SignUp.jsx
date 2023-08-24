// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import API from "../Api";
import { Link } from "react-router-dom";

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
      console.log(response);
      if (response.status === 200) {
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
    <div className="Register_container">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name :
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </label>
        <label>
          E-mail :
          <input
            type="email"
            name="username"
            id="username"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </label>
        {<h4>{errorMsg && <p>{errorMsg}</p>}</h4>}
        <button type="submit">Register</button>
        <Link to={"/signin"}>Login</Link>
      </form>
    </div>
  );
}

export default SignUp;
