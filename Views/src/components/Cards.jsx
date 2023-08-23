/* eslint-disable react/prop-types */
function Cards({ CardDetails }) {
  return (
    <>
      {CardDetails.map((element, index) => (
        <div className="IndividualCard" key={index}>
          <div>
            <img src={element.image} alt={element.data1} />
          </div>
          <div>
            <h3>{element.data1}</h3>
            <p>{element.data2}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
