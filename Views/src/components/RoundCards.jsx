import PropTypes from "prop-types";
import styles from "./RoundCards.module.css";
function RoundCard({ CardDetails }) {
  return (
    <>
      {CardDetails.map((element, index) => (
        <div key={index} className={styles.IndividualCard}>
          <div>
            <img src={element.image} alt={element.text} />
          </div>
          <div>
            <p>{element.text}</p>
            <button>CONSULT NOW</button>
          </div>
        </div>
      ))}
    </>
  );
}
RoundCard.propTypes = {
  CardDetails: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RoundCard;
