import "./Footer.css";
import { logoImage } from "../images";

function Footer() {
  return (
    <footer className="Footer">
      {/* 1 */}
      <div className="footer01">
        <div>
          <h4>Practo</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>For patients</h4>
          <p>Search for doctors</p>
          <p>Search for clinics</p>
          <p>Search for hospitals</p>
          <p>Book Diagnostic Tests</p>
          <p>Book Full Body Checkups</p>
          <p>Practo Plus</p>
          <p>Covid Hospital listing</p>
          <p>Practo Care Clinics</p>
          <p>Read health articles</p>
          <p>Read about medicines</p>
          <p>Practo drive</p>
          <p>Health app</p>
          <p>Practo Plus Infinity</p>
        </div>

        <div>
          <h4>For doctors</h4>
          <p>Practo Profile</p>
          <h4>For clinics</h4>
          <p>Ray by Practo</p>
          <p>Practo Reach</p>
          <p>Ray Tab</p>
          <p>Practo Pro</p>
        </div>

        <div>
          <h4>For hospitals</h4>
          <p>Insta by Practo </p>
          <p>Qikwell by Practo </p>
          <p>Practo Profile </p>
          <p>Practo Reach </p>
          <p>Practo Drive</p>
          <h4>For Corporates</h4>
          <p> Wellness Plans</p>
        </div>

        <div>
          <h4>More</h4>
          <p>Help</p>
          <p>Developers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>PCS T&C</p>
          <p>Healthcare Directory</p>
          <p>Practo Health Wiki</p>
        </div>

        <div>
          <h4>Social</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Youtube</p>
          <p>Github</p>
        </div>
      </div>

      {/* 2 */}
      <div className="footer02">
        <img src={logoImage} alt="logo" />
      </div>

      {/* 3 */}
      <div className="footer03">Copyright © 2017, Practo. All rights reserved</div>
    </footer>
  );
}

export default Footer;
