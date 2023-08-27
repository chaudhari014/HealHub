import { useState, useEffect } from "react";
import "./FindDoctor.css";
import API from "../Api";
import { useLocation,useNavigate } from "react-router-dom";

function FindDoctors() {
  const location = useLocation();
  const expert = location.state.id;

  const navigate = useNavigate();

  const dataHandler = (id) =>{
     const drId = id;
     onClickHandler(drId);
  }

  const onClickHandler = (id) =>{
    navigate('/appointment', {state:{drsId:id}})
  }
  
  const [docData, setdocData] = useState([])
  useEffect(()=>{
    fetch(`${API}/doctors`)
    .then((res)=>res.json())
    .then((myData)=>{
      const ourData = myData.data
      const fixData = ourData.filter((elem)=> elem.Speciality==expert)
      setdocData(fixData)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  
  
    
  return (
    <>
    <h1>Our {expert}</h1>
    <div  id="doc">
     {
      docData.map((el)=>(
          <div id="card" key={el._id}>
          <img src={el.image} alt="" />
          <h3>{el.name}</h3>
          <h4>{el.description}</h4>
          <h5>Rating:- {el.rating}/5</h5>
          <button onClick={()=>{dataHandler(el._id)}}>Book Appointment</button>
         </div>
        )
        )
     }
     </div>
     </>
  )
}

export default FindDoctors;
