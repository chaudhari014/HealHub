import { useState } from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../images";
import "./Navbar.css";

function DoctorNavbar() {
  const [barOrTabClicked, setBarOrTabClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // localStorage.setItem("user", "John Doe");
  const userName = localStorage.getItem("user");

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
              <Link to={"/"}>My Appointments</Link>
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
                            onClick={() => {
                              localStorage.removeItem("email");
                              localStorage.removeItem("user");
                              localStorage.removeItem("role");
                              localStorage.removeItem("userID");
                              setIsHovered(!isHovered);
                              alert("User Logged out Successfully");
                            }}
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
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-magnifying-glass"></i> All Doctors -{" "}
                <span>Our Soilders</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-video"></i> My Appointments -{" "}
                <span>Check your appointments</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-cart-shopping"></i> Medicines -{" "}
                <span>HealHub pharmacy</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-users-gear"></i> HealHub Services -{" "}
                <span>At our Best Services</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleBarOrTabClicked} to={"/"}>
                <i className="fa-solid fa-flask-vial"></i> Lab Tests -{" "}
                <span>Tests & checkup</span>
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
                              onClick={() => {
                                localStorage.removeItem("email");
                                localStorage.removeItem("user");
                                localStorage.removeItem("role");
                                localStorage.removeItem("userID");
                                setIsHovered(!isHovered);
                                alert("User Logged out Successfully");
                              }}
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

export default DoctorNavbar;
