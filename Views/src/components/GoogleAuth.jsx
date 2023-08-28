/* eslint-disable no-unused-vars */
import React from 'react'
// import { useLocation, useNavigate } from "react-dom-server";
// import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";


import { FcGoogle } from "react-icons/fc";
import { logoImage } from "../images";
function GoogleAuth() {

  return (
    <div className="right_side">
        <div>
          <img src={logoImage} alt="logo" />
          <fieldset>
            <legend>Register With</legend>
          </fieldset>
          <button>
            <FcGoogle />
          </button>
          <p>Google</p>
        </div>
      </div>
  )
}

export default GoogleAuth;