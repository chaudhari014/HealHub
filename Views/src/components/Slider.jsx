import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";

function Slider({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="SliderDiv">
      <p>What our users have to say</p>
      <div className="slider">
        <button className="slider-button" onClick={goToPreviousSlide}>
          <i className="fa-solid fa-chevron-left fa-2xl"></i>
        </button>
        <div className="review">
          <p className="review-text">{texts[currentIndex].review}</p>
          <p className="user">
            <i className="fa-solid fa-circle-user fa-xl"></i>
            {texts[currentIndex].user}
          </p>
        </div>
        <button className="slider-button" onClick={goToPreviousSlide}>
          <i className="fa-solid fa-chevron-right fa-2xl"></i>
        </button>
      </div>
    </div>
  );
}

Slider.propTypes = {
  texts: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
