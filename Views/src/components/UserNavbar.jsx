/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../images";
import API from "../Api";
import "./Navbar.css";

function UserNavbar() {
  const [barOrTabClicked, setBarOrTabClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // localStorage.setItem("user", "John Doe");
  const userName = localStorage.getItem("user");

  const handleBarOrTabClicked = () => {
    setBarOrTabClicked(!barOrTabClicked);
  };

  const handleLogout = () => {
    fetch(`${API}/logout`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setIsHovered(!isHovered);
        alert("User Logged out Successfully");
        localStorage.removeItem("email");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("docInfo");
        localStorage.removeItem("userID");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
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
              <Link to={"/services"}>Our Services</Link>
            </li>
            <li>
              <Link to={"/all_doctors"}>Our Doctors</Link>
            </li>
            <li>
              <Link to={"/video_consult"}>Video Consult</Link>
            </li>
            <li>
              <Link to={"/"}>Lab Tests</Link>
            </li>
            <li>
              {userName ? (
                <div>
                  <button
                    className="UserName"
                    onClick={() => setIsHovered(!isHovered)}
                  >
                    {userName}
                  </button>
                  {isHovered && (
                    <div className="HiddenContent">
                      <ul>
                        <li>
                          <Link
                            onClick={() => setIsHovered(!isHovered)}
                            to={"/"}
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setIsHovered(!isHovered)}
                            to={"/"}
                          >
                            My Appointments
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => setIsHovered(!isHovered)}
                            to={"/"}
                          >
                            My Wallet
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={handleLogout}
                            to={"/"}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link className="loginButton" to={"/signin"}>
                  <button>Login</button>
                </Link>
              )}
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
              <Link onClick={handleBarOrTabClicked} to={"/all_doctors"}>
                <i className="fa-solid fa-magnifying-glass"></i> Our Doctors -{" "}
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
              <li>
                {userName ? (
                  <div>
                    <button
                      className="UserName"
                      onClick={() => setIsHovered(!isHovered)}
                    >
                      {userName}
                    </button>
                    {isHovered && (
                      <div className="HiddenContent">
                        <ul>
                          <li>
                            <Link
                              onClick={() => setIsHovered(!isHovered)}
                              to={"/"}
                            >
                              My Profile
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleLogout}
                              to={"/"}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link className="loginButton" to={"/signin"}>
                    <button>Login</button>
                  </Link>
                )}
              </li>
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

export default UserNavbar;
