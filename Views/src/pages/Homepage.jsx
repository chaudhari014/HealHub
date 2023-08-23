import { Cards } from "../components";
import { banner01 } from "../images";
import CardDetails01 from "../data/cardsdata.json";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="HomePage">
      {/* Add 01 */}
      <div className="add01">
        <img src={banner01} alt="add01" />
      </div>
      {/* Cards */}
      <div className="CardMain01">
        <Cards CardDetails={CardDetails01} />
      </div>
    </div>
  );
}

export default Homepage;
