import { useState } from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../images";
import "./Navbar.css";

function Navbar() {
  const [barOrTabClicked, setBarOrTabClicked] = useState(false);

  const handleBarOrTabClicked = () => {
    setBarOrTabClicked(!barOrTabClicked);
  };

  return (
    <nav className="NavbarItems">
      {/*1. Logo */}
      <div className="Logo">
        <Link to={"/"}>
          <img src={logoImage} alt="healhub logo" />
        </Link>
      </div>
      {/*2. Linked Blocks */}
      <div>
        <ul
          id="navbar"
          className={barOrTabClicked ? "#navbar active" : "#navbar"}
        >
          <li>
            <Link
              onClick={handleBarOrTabClicked}
              className="active hideHome"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleBarOrTabClicked} to={"/find_doctors"}>
              Find Doctors
            </Link>
          </li>
          <li>
            <Link onClick={handleBarOrTabClicked} to={"/video_consult"}>
              Video Consult
            </Link>
          </li>
          <li>
            <Link onClick={handleBarOrTabClicked} to={"/services"}>
              Our Services
            </Link>
          </li>
          <li>
            <Link onClick={handleBarOrTabClicked} to={"/"}>
              Lab Tests
            </Link>
          </li>
          <li>
            <Link
              onClick={handleBarOrTabClicked}
              className="loginButton"
              to={"/signin"}
            >
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Burger Menu */}
      <div onClick={handleBarOrTabClicked} id="mobile">
        <i
          id="bar"
          className={barOrTabClicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
