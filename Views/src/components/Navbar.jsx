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
        {!barOrTabClicked ? (
          <ul
            id="navbar"
            className={barOrTabClicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <Link className="active hideHome" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/find_doctors"}>Find Doctors</Link>
            </li>
            <li>
              <Link to={"/video_consult"}>Video Consult</Link>
            </li>
            <li>
              <Link to={"/services"}>Our Services</Link>
            </li>
            <li>
              <Link to={"/"}>Lab Tests</Link>
            </li>
            <li>
              <Link className="loginButton" to={"/signup"}>
                <button>Login</button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul
            id="navbar"
            className={barOrTabClicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <div className="navbarTempData">
                <p>
                  HealHub <span>PLUS</span>
                </p>
                <p>Health plans for you and your family</p>
              </div>
            </li>
            <li></li>

            <li>
              <Link onClick={handleBarOrTabClicked} to={"/find_doctors"}>
                <i className="fa-solid fa-magnifying-glass"></i> Find Doctors -{" "}
                <span>Book an appointment</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/video_consult"}>
                <i className="fa-solid fa-video"></i> Video Consult -{" "}
                <span>Consult top Doctors</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-cart-shopping"></i> Medicines -{" "}
                <span>HealHub pharmacy</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/services"}>
                <i className="fa-solid fa-users-gear"></i> Our Services -{" "}
                <span>Book our Services</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-flask-vial"></i> Lab Tests -{" "}
                <span>Book tests & checkup</span>
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
        )}
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
