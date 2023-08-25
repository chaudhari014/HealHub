import React from "react"
import './Service.css'
import FindDoctors from "./FindDoctors"
import { Link } from "react-router-dom"

function Services() {
  return (
    <>
    <div id="banner">
    <div>
        <h1>Skip the travel!</h1>
        <h1>Take Online Doctor Consultation</h1>
        <h3>Private consultation + Audio call</h3>
        <h3>Start at just ₹199</h3>
        <button>Consult Now</button>
    </div>
    <div>
        <img src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png" alt="" />
    </div>
    </div>
    <h1>25+ Specialities</h1>
    <h2>Consult with top doctors across specialities</h2>
    <div id='container'>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg" alt=""/>
            <h3>Gynaecology</h3>
            <p>₹599</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="" />
            <h3>Sexology</h3>
            <p>₹499</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-gp.svg" alt="" />
            <h3>General Physician</h3>
            <p>₹399</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg" alt="" />
            <h3>Dermatology</h3>
            <p>₹499</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg" alt="" />
            <h3>Psychiatry</h3>
            <p>₹999</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card'>
            <img src="https://www.practo.com/consult/static/images/top-speciality-stomach.svg" alt="" />
            <h3>Stomach</h3>
            <p>₹299</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
    </div>
      <h1>Common Health Concerns</h1>
      <h2>Consult doctor online for any health issue</h2>
      <div id='container'>
        <div id='card1'>
            <img src="https://www.practo.com/consult/static/images/cough-cold-v1.jpg" alt=""/>
            <h3>Cough & Cold?</h3>
            <p>₹499</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card1'>
            <img src="https://www.practo.com/consult/static/images/period-problems-v1.jpg" alt="" />
            <h3>Period problems?</h3>
            <p>₹599</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card1'>
            <img src="https://www.practo.com/consult/static/images/performance-issues-bed-v1.jpg" alt="" />
            <h3>Performance issues in bed?</h3>
            <p>₹699</p>
            <a href="/find_doctors"><button>Consult now</button></a>
        </div>
        <div id='card1'>
            <img src="https://www.practo.com/consult/static/images/skin-problems-v1.jpg" alt="" />
            <h3>Skin problems?</h3>
            <p>₹549</p>
            <a href="/find_doctors"><button>Consult now</button></a>
            
        </div>
    </div>
      
    </>
  )
}

export default Services