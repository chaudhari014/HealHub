import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  FindDoctors,
  Services,
  VideoConsult,
  SignIn,
  SignUp,
} from "./pages";
import { Navbar, Footer } from "./components";
import Payment from "./pages/Payment"

function App(){
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/find_doctors" element={<FindDoctors />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/video_consult" element={<VideoConsult />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pay" element={<Payment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
