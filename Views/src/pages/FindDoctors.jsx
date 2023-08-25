import React, {useState,useEffect} from "react"
import "./FindDoctor.css"

function FindDoctors() {
  const [docData, setdocData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/doc")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setdocData(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  const doc = "Doc..."
    
  return (
    <>
    <h1>Our {doc}</h1>
    <div  id="doc">
     {
      docData.map((el)=>(
        <div id="card">
         <img src={el.image} alt="" />
         <h3>{el.first_name}</h3>
         <h4>{el.expert}</h4>
         <h5>Rating:- {el.rating}/5</h5>
         <button >Book Appointment</button>
        </div>
       
      ))
        
     }
      </div>
        
    </>
  )
}

export default FindDoctors