import React, {useState,useEffect} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import API from "../Api";
import './Appointment.css'

function Appointment() {
  const navigate = useNavigate();
  const [appointDr, setAppointDr] = useState([])
  const [isTrue1, setIsTrue1] = useState()
  const [isTrue2, setIsTrue2] = useState()
  const [isTrue3, setIsTrue3] = useState()
  const [isTrue4, setIsTrue4] = useState()

  const location = useLocation();
  const drId  = location.state.drsId;

  function navigationt1(){
    if(appointDr.length>0){
      const myObj = {
        id:appointDr[0]._id,
        slot:"t1",
        time:"9AM-12PM"
      };
      localStorage.setItem("docInfo", JSON.stringify(myObj))
      alert("Booking Appointment 9AM-12PM")
      navigate('')
    }
    
  }


  useEffect(()=>{
    if(drId){
      fetch(`${API}/doctors`)
      .then((res)=>res.json())
      .then((myData)=>{
        const ourData = myData.data
        const fixData = ourData.filter((elem)=> elem._id==drId)
         setAppointDr(fixData);
         
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  
  },[])

  useEffect(()=>{
    if(appointDr.length>0){
          setIsTrue1(appointDr[0].availability[0].t1)
          setIsTrue2(appointDr[0].availability[0].t2)
          setIsTrue3(appointDr[0].availability[0].t3)
          setIsTrue4(appointDr[0].availability[0].t4)
    }
  },[appointDr])
  


  return <>
  <h1>Book Appointment</h1>
  { appointDr.length > 0 &&(
    <div id="drCard">
    <img src={appointDr[0].image} alt="" />
    <div id="text">
      <h1>{appointDr[0].name}</h1>
      <h2>{appointDr[0].Speciality}</h2>
      <p>{appointDr[0].description}</p>
      <p>Email:-{appointDr[0].email}</p>
      <div id="button1">
      <button className={isTrue1 ? "green-button" : "red-button"} onClick={navigationt1}>09AM-12PM</button>
      <button className={isTrue2 ? "green-button" : "red-button"} >12PM-03PM</button>
      <button className={isTrue3 ? "green-button" : "red-button"} >03PM-06PM</button>
      <button className={isTrue4 ? "green-button" : "red-button"} >06PM-09PM</button>
    </div>
    </div>
    
     
   </div>
  )
  
  }
   


  </>
}

export default Appointment;
