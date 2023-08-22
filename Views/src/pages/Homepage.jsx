import { banner01 } from "../images";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="HomePage">
      {/* Add 01 */}
      <div className="add01">
        <img src={banner01} alt="add01" />
      </div>
    </div>
  );
}

export default Homepage;
