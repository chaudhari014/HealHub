/* eslint-disable no-unreachable */
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import "./Navbar.css";
import UserNavbar from "./UserNavbar";
import DoctorNavbar from "./DoctorNavbar";

  function Navbar() {
    const role = localStorage.getItem("role") || "customer";
  
    return <>{role == "customer" ? <UserNavbar /> : <DoctorNavbar />}</>;
  }
  
  export default Navbar;
