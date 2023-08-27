import { useState } from "react";
import { allDoctorsData } from "../data";
import "./AllDoctors.css";

function AllDoctors() {
  const doctorsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = allDoctorsData.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const totalPages = Math.ceil(allDoctorsData.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="doctors-container">
      <h1 className="quote">
        Where science and compassion meet, doctors heal and hearts mend.
      </h1>
      <div className="doctors-list">
        {currentDoctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="doctor-image-box">
              <img
                className="doctor-image"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>
            <div className="doctor-info">
              <h2 className="doctor-name">{doctor.name}</h2>
              <p className="doctor-description">{doctor.description}</p>
              <p className="doctor-details">
                <strong>Speciality:</strong> {doctor.speciality}
                <br />
                <strong>Email:</strong> {doctor.email}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="arrow-button" onClick={handlePrevPage}>
          <i className="fa-solid fa-angle-left fa-2xl"></i>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : "page-buttons"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button className="arrow-button" onClick={handleNextPage}>
          <i className="fa-solid fa-angle-right fa-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default AllDoctors;
