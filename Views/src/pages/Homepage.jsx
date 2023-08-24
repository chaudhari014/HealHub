import { Cards, RoundCards } from "../components";
import { banner01 } from "../images";
import { cardsData, roundCardData } from "../data";
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
        <Cards CardDetails={cardsData} />
      </div>

      {/* Title */}
      <div className="Title">
        <p>Consult top doctors online for any health concern</p>
        <p>
          Private online consultations with verified doctors in all specialists
        </p>
      </div>

      {/* Round Card */}
      <div className="RoundCards01">
        <RoundCards CardDetails={roundCardData} />
      </div>

      {/* Title */}
      <div className="Title">
        <p>Consult top doctors online for any health concern</p>
        <p>
          Private online consultations with verified doctors in all specialists
        </p>
      </div>
    </div>
  );
}

export default Homepage;
