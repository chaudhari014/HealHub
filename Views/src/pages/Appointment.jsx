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
      if(appointDr[0].availability[0].t1==true){
        const myObj = {
          id:appointDr[0]._id,
          slot:"t1",
          time:"9AM-12PM",
          name:appointDr[0].name,
        speciality:appointDr[0].Speciality,
        price:appointDr[0].price
        };
        localStorage.setItem("docInfo", JSON.stringify(myObj))
        alert("Booking Appointment 9AM-12PM")
        navigate('/pay')
      }else{
        alert("Doctor is not available at this time slot please choose another")
      }
      }
  }

  function navigationt2(){
    if(appointDr.length>0){
      if(appointDr[0].availability[0].t2==true){
      const myObj = {
        id:appointDr[0]._id,
        slot:"t2",
        time:"12PM-03PM",
        name:appointDr[0].name,
        speciality:appointDr[0].Speciality,
        price:appointDr[0].price
      };
      localStorage.setItem("docInfo", JSON.stringify(myObj))
      alert("Booking Appointment 12PM-03PM")
      navigate('/pay')
    }else{
      alert("Doctor is not available at this time slot please choose another")
    }
    }
  }

  function navigationt3(){
    if(appointDr.length>0){
      if(appointDr[0].availability[0].t3==true){
      const myObj = {
        id:appointDr[0]._id,
        slot:"t3",
        time:"03PM-06PM",
        name:appointDr[0].name,
        speciality:appointDr[0].Speciality,
        price:appointDr[0].price

      };
      localStorage.setItem("docInfo", JSON.stringify(myObj))
      alert("Booking Appointment 03AM-06PM")
      navigate('/pay')
    }else{
      alert("Doctor is not available at this time slot please choose another")
    }
    }
  }

  function navigationt4(){
    if(appointDr.length>0){
      if(appointDr[0].availability[0].t4==true){
      const myObj = {
        id:appointDr[0]._id,
        slot:"t4",
        time:"06PM-09PM",
        name:appointDr[0].name,
        speciality:appointDr[0].Speciality,
        price:appointDr[0].price
      };
      localStorage.setItem("docInfo", JSON.stringify(myObj))
      alert("Booking Appointment 06PM-09PM")
      navigate('/pay')
    }else{
      alert("Doctor is not available at this time slot please choose another")
    }
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
  


  return (<>
  
  { appointDr.length > 0 &&(
    <div>
    <h1>Book Appointment With {appointDr[0].name} </h1>
    <div id="drCard">
      <div id="img"><img src={appointDr[0].image} alt="" /></div>
    <div id="text">
      <h1>A {appointDr[0].Speciality} Expert</h1>
      <h2>{appointDr[0].description}</h2>
      <h3>Email:-{appointDr[0].email}</h3>
      <h3>Appointment Fees:- {appointDr[0].price}/- only</h3>
      <div id="button">
      <button className={isTrue1 ? "green-button" : "red-button"} onClick={navigationt1}>09AM-12PM</button>
      <button className={isTrue2 ? "green-button" : "red-button"} onClick={navigationt2} >12PM-03PM</button>
      <button className={isTrue3 ? "green-button" : "red-button"} onClick={navigationt3} >03PM-06PM</button>
      <button className={isTrue4 ? "green-button" : "red-button"} onClick={navigationt4} >06PM-09PM</button>
      </div>
    </div>
    
     
   </div>
   </div>
  )
  }
  </>
  )
}

export default Appointment;
