
import { useState, useEffect } from "react";
import "./FindDoctor.css";
import API from "../Api";
import { useLocation, useNavigate } from "react-router-dom";

function FindDoctors() {
  const location = useLocation();
  const expert = location.state.id;
  console.log(expert);

  const navigate = useNavigate();

  const dataHandler = (id) => {
    const drId = id;
    onClickHandler(drId);
  };

  const onClickHandler = (id) => {
    navigate("/appointment", { state: { drsId: id } });
  };

  const [docData, setdocData] = useState([]);
  useEffect(() => {
    if (expert) {
      fetch(`${API}/doctors`)
        .then((res) => res.json())
        .then((myData) => {
          const ourData = myData.data;
          const fixData = ourData.filter((elem) => elem.Speciality == expert);
          setdocData(fixData);
          console.log(ourData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
   
  },[expert])
 
  return (
    <>
      <div className="findDoctors">
        <h1>Our {expert} Doctors</h1>
        <div id="doc">
          {docData.map((el) => (
            <div id="card" key={el._id}>
              <div>
                <img src={el.image} alt="err" />
              </div>
              <div>
                <h3>{el.name}</h3>
                <h4>{el.description}</h4>
                <h5>Rating:- {el.rating}/5</h5>
              </div>
              <button
                onClick={() => {
                  dataHandler(el._id);
                }}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindDoctors;
