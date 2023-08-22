import React from "react"
import './Service.css'

function Services() {
  return (
    <>
    <h1>25+ Specialities</h1>
    <h2>Consult with top doctors across specialities</h2>
    <div id='container'>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg" alt=""/>
            <h3>Gynaecology</h3>
            <p>₹599</p>
            <button>Consult now</button>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="" />
            <h3>Sexology</h3>
            <p>₹499</p>
            <button>Consult now</button>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-gp.svg" alt="" />
            <h3>General Physician</h3>
            <p>₹399</p>
            <button>Consult now</button>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg" alt="" />
            <h3>Dermatology</h3>
            <p>₹499</p>
            <button>Consult now</button>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg" alt="" />
            <h3>Psychiatry</h3>
            <p>₹999</p>
            <button>Consult now</button>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-stomach.svg" alt="" />
            <h3>Stomach</h3>
            <p>₹299</p>
            <button>Consult now</button>
        </div>
    </div>
    </>
  )
}

export default Services